////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Physical Dashboard Arduino module for initializing pi responsible for dash leds, blinker switches and relays //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* global rightBlink, leftBlink, hazardBlink  */
//necesary modules for connecting pi to all data inputs
var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var potArduino = require("./potArduino.js");
var hallArduino = require("./hallArduino");
var pigpio = require('pigpio');
var Gpio = pigpio.Gpio;
pigpio.configureClock(5, pigpio.CLOCK_PCM); //set polling rate on raspberry pi pins (important for alert event)
//init function for main initialize js code
exports.init = function() {
    //configure pi to manage relays, leds, switches 
    //setup all pins to respective job
    var batG = new Gpio(2, {
        mode: Gpio.OUTPUT
    }); // battery Green
    var batY = new Gpio(3, {
        mode: Gpio.OUTPUT
    }); // battery Yellow
    var batR = new Gpio(4, {
        mode: Gpio.OUTPUT
    }); // battery Red
    var rightSwitch = new Gpio(14, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_UP,
        alert: true
    }); //right switch
    var leftSwitch = new Gpio(15, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_UP,
        alert: true
    }); // left switch
    var hazardSwitch = new Gpio(18, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_UP,
        alert: true
    }); // hazard switch
    var rightRelay = new Gpio(17, {
        mode: Gpio.OUTPUT
    }); //right relay
    var leftRelay = new Gpio(27, {
        mode: Gpio.OUTPUT
    }); //left relay
    var hazardRelay = new Gpio(22, {
        mode: Gpio.OUTPUT
    }); //hazard relay
    var rightR = new Gpio(23, {
        mode: Gpio.OUTPUT
    }); //right red
    var rightG = new Gpio(24, {
        mode: Gpio.OUTPUT
    }); //right green
    var centerB = new Gpio(10, {
        mode: Gpio.OUTPUT
    }); //center blue
    var leftG = new Gpio(9, {
        mode: Gpio.OUTPUT
    }); //left green
    var leftR = new Gpio(11, {
        mode: Gpio.OUTPUT
    }); //left red 
    var accelR = new Gpio(25, {
        mode: Gpio.OUTPUT
    }); //accelerator red
    var accelG = new Gpio(8, {
        mode: Gpio.OUTPUT
    }); //accelerator green
    var stableB = new Gpio(7, {
        mode: Gpio.OUTPUT
    }); //stable blue
    var decelG = new Gpio(1, {
        mode: Gpio.OUTPUT
    }); //decelerator green
    var decelR = new Gpio(0, {
        mode: Gpio.OUTPUT
    }); //decelerator red
    var lastLap = new Gpio(12, {
        mode: Gpio.OUTPUT
    }); //last lap blue

    //telling when battery SOC leds to turn on
    if (batMon.serialdata.SOC >= 66) {
        batG.digitalWrite(1); // led on
        batY.digitalWrite(0);
        batR.digitalWrite(0);
    }
    else if (batMon.serialdata.SOC < 66 && batMon.serialdata.SOC > 33) {
        batG.digitalWrite(0);
        batY.digitalWrite(1); // led on
        batR.digitalWrite(0);
    }
    else if (batMon.serialdata.SOC <= 33) {
        batG.digitalWrite(0);
        batY.digitalWrite(0);
        batR.digitalWrite(1); // led on
    }
    // establishing blink functions for each pin
    // connecting right switch to relays
    var rightDebounce = new Date();
    rightSwitch.on('alert', function(value) {
        if (new Date() - rightDebounce > 100) {
            if (value == 0 && hazardSwitch.digitalRead() == 1) {
                rightRelay.digitalWrite(1);
                rightBlink = setInterval(function() { // internal timer to repeat code at set interval
                    rightRelay.digitalWrite(!rightRelay.digitalRead()); // led switches to opposite state
                }, 500); // milliseconds to repeat code
            }
            if (value == 1 && hazardSwitch.digitalRead() == 1) {
                clearInterval(rightBlink); // Stop blinking
                rightRelay.digitalWrite(0); // Turn LED off.
            }
            rightDebounce = new Date();
        }
    });
    // connecting left switch to left relay
    var leftDebounce = new Date();
    leftSwitch.on('alert', function(value) {
        if (new Date() - leftDebounce > 100) {
            if (value == 0 && hazardSwitch.digitalRead() == 1) {
                leftRelay.digitalWrite(1);
                leftBlink = setInterval(function() { // internal timer to repeat code at set interval
                    leftRelay.digitalWrite(!leftRelay.digitalRead()); // led switches to opposite state
                }, 500); // milliseconds to repeat code

            }
            if (value == 1 && hazardSwitch.digitalRead() == 1) {
                clearInterval(leftBlink); // Stop blinking
                leftRelay.digitalWrite(0); // Turn LED off.
            }
            leftDebounce = new Date();
        }
    });
    // connecting hazard switch to hazard relay
    var hazardDebounce = new Date();
    hazardSwitch.on('alert', function(value) {
        if (new Date() - hazardDebounce > 100) {
            if (leftSwitch.digitalRead() == 0) {
                clearInterval(leftBlink);
                leftRelay.digitalWrite(0);
            }
            if (rightSwitch.digitalRead() == 0) {
                clearInterval(rightBlink);
                rightRelay.digitalWrite(0);
            }
            if (value == 0) {
                leftRelay.digitalWrite(1);
                leftBlink = setInterval(function() { // internal timer to repeat code at set interval
                    leftRelay.digitalWrite(!leftRelay.digitalRead()); // led switches to opposite state
                }, 500); // milliseconds to repeat code
                rightRelay.digitalWrite(1);
                rightBlink = setInterval(function() { // internal timer to repeat code at set interval
                    rightRelay.digitalWrite(!rightRelay.digitalRead()); // led switches to opposite state
                }, 500); // milliseconds to repeat code
            }
            if (value == 1) {
                clearInterval(leftBlink); // Stop blinking
                clearInterval(rightBlink); // Stop blinking
                leftRelay.digitalWrite(0); // Turn LED off.
                rightRelay.digitalWrite(0);
                if (rightSwitch.digitalRead() == 0) {
                    rightRelay.digitalWrite(1);
                    rightBlink = setInterval(function() { // internal timer to repeat code at set interval
                        rightRelay.digitalWrite(!rightRelay.digitalRead()); // led switches to opposite state
                    }, 500); // milliseconds to repeat code
                }
                else if (leftSwitch.digitalRead() == 0) {
                    leftRelay.digitalWrite(1);
                    leftBlink = setInterval(function() { // internal timer to repeat code at set interval
                        leftRelay.digitalWrite(!leftRelay.digitalRead()); // led switches to opposite state
                    }, 500); // milliseconds to repeat code
                }
            }
            hazardDebounce = new Date();
        }
    });
    module.exports.turnLed = function() {
        if (batMon.serialdata.turnAngle > 45 && rightR.digitalRead() == 0) {
            rightR.digitalWrite(1); // led on
            rightG.digitalWrite(0); // led off
            centerB.digitalWrite(0); // led off
            leftG.digitalWrite(0); // led off
            leftR.digitalWrite(0); // led off
        }
        else if (batMon.serialdata.turnAngle < 45 && batMon.serialdata.turnAngle > 5 && rightG.digitalRead() == 0) {
            rightR.digitalWrite(0); // led off
            rightG.digitalWrite(1); // led on
            centerB.digitalWrite(0); // led off
            leftG.digitalWrite(0); // led off
            leftR.digitalWrite(0); // led off
        }
        else if (batMon.serialdata.turnAngle <= 5 && batMon.serialdata.turnAngle >= -5 && centerB.digitalRead() == 0) {
            rightR.digitalWrite(0); // led off
            rightG.digitalWrite(0); // led off
            centerB.digitalWrite(1); // led on
            leftG.digitalWrite(0); // led off
            leftR.digitalWrite(0); // led off
        }
        else if (batMon.serialdata.turnAngle < -5 && batMon.serialdata.turnAngle > -45 && leftG.digitalRead() == 0) {
            rightR.digitalWrite(0); // led off
            rightG.digitalWrite(0); // led off
            centerB.digitalWrite(0); // led off
            leftG.digitalWrite(1); // led on
            leftR.digitalWrite(0); // led off
        }
        else if (batMon.serialdata.turnAngle < -45 && leftR.digitalRead() == 0) {
            rightR.digitalWrite(0); // led off
            rightG.digitalWrite(0); // led off
            centerB.digitalWrite(0); // led off
            leftG.digitalWrite(0); // led off
            leftR.digitalWrite(1); // led on
        }
    };
    // telling turn angle leds to turn on
    // telling accelerometer leds to turn on
    /*
    if (delta < -2) {
        accelR.digitalWrite(1); // led on
        accelG.digitalWrite(0); // led off
        stableB.digitalWrite(0); // led off
        decelG.digitalWrite(0); // led off
        decelR.digitalWrite(0); // led off
    }
    else if (delta >= -2 && delta < -.5) {
        accelR.digitalWrite(0); // led off
        accelG.digitalWrite(1); // led on
        stableB.digitalWrite(0); // led off
        decelG.digitalWrite(0); // led off
        decelR.digitalWrite(0); // led off
    }
    else if (delta >= -0.5 && delta <= 0.5) {
        accelR.digitalWrite(0); // led off
        accelG.digitalWrite(0); // led off
        stableB.digitalWrite(1); // led on
        decelG.digitalWrite(0); // led off
        decelR.digitalWrite(0); // led off
    }
    else if (delta > .5 && delta <= 2) {
        accelR.digitalWrite(0); // led off
        accelG.digitalWrite(0); // led off
        stableB.digitalWrite(0); // led off
        decelG.digitalWrite(1); // led on 
        decelR.digitalWrite(0); // led off
    }
    else if (delta > 2) {
        accelR.digitalWrite(0); // led off
        accelG.digitalWrite(0); // led off
        stableB.digitalWrite(0); // led off
        decelG.digitalWrite(0); // led off;
        decelR.digitalWrite(1); // led on
    }
*/
    //tell Raspberry pi to turn off all leds on exit
    process.on('exit', function() {
        batG.digitalWrite(0);
        batY.digitalWrite(0);
        batR.digitalWrite(0);
        rightRelay.digitalWrite(0);
        leftRelay.digitalWrite(0);
        hazardRelay.digitalWrite(0);
        rightR.digitalWrite(0);
        rightG.digitalWrite(0);
        centerB.digitalWrite(0);
        leftG.digitalWrite(0);
        leftR.digitalWrite(0);
        accelR.digitalWrite(0);
        accelG.digitalWrite(0);
        stableB.digitalWrite(0);
        decelG.digitalWrite(0);
        decelR.digitalWrite(0);
        lastLap.digitalWrite(0);
    });
    //tell raspberry pi to turn off leds on ctrl-c
    process.on('SIGINT', function() {
        batG.digitalWrite(0);
        batY.digitalWrite(0);
        batR.digitalWrite(0);
        rightRelay.digitalWrite(0);
        leftRelay.digitalWrite(0);
        hazardRelay.digitalWrite(0);
        rightR.digitalWrite(0);
        rightG.digitalWrite(0);
        centerB.digitalWrite(0);
        leftG.digitalWrite(0);
        leftR.digitalWrite(0);
        accelR.digitalWrite(0);
        accelG.digitalWrite(0);
        stableB.digitalWrite(0);
        decelG.digitalWrite(0);
        decelR.digitalWrite(0);
        lastLap.digitalWrite(0);
    });
    //turn led off on uncaught exception 
    process.on('uncaughtException', function() {
        batG.digitalWrite(0);
        batY.digitalWrite(0);
        batR.digitalWrite(0);
        rightRelay.digitalWrite(0);
        leftRelay.digitalWrite(0);
        hazardRelay.digitalWrite(0);
        rightR.digitalWrite(0);
        rightG.digitalWrite(0);
        centerB.digitalWrite(0);
        leftG.digitalWrite(0);
        leftR.digitalWrite(0);
        accelR.digitalWrite(0);
        accelG.digitalWrite(0);
        stableB.digitalWrite(0);
        decelG.digitalWrite(0);
        decelR.digitalWrite(0);
        lastLap.digitalWrite(0);
    });
};
