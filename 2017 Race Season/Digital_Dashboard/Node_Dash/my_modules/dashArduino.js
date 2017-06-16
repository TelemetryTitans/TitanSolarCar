////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Physical Dashboard Arduino module for initializing arduino responsible for dash leds, blinker switches and relays //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//necesary modules for connecting arduino to all data inputs
var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var potArduino = require("./potArduino.js");
var hallArduino = require("./hallArduino");
var john = require("johnny-five");

//init function for main initialize js code
exports.init = function() {
    //establush arduino in johnny-five
    var dashboard = new john.Board({
        id: "Dashboard Arduino",
        repl: false,
        debug: false
    });
    //configure arduino to manage relays, leds, switches 
    dashboard.on("ready", function() {
        //setup all pins to respective job
        var batG = new john.Led(23);
        var batY = new john.Led(25);
        var batR = new john.Led(27);
        var rightSwitch = new john.Switch(26);
        var leftSwitch = new john.Switch(28);
        var hazardSwitch = new john.Switch(34);
        var lastLap = new john.Led(49);
        var rightRelay = new john.Relay(32);
        var leftRelay = new john.Relay(30);
        var hazardRelay = new john.Relay(36);
        var accelR = new john.Led(39);
        var accelG = new john.Led(41);
        var stableB = new john.Led(43);
        var decelG = new john.Led(45);
        var decelR = new john.Led(47);
        var rightR = new john.Led(29);
        var rightG = new john.Led(31);
        var centerB = new john.Led(33);
        var leftG = new john.Led(35);
        var leftR = new john.Led(37);
        //johnny-five object to controll all leds at once
        var lights = john.Leds([batG, batY, batR, lastLap, accelG, accelR, stableB, decelG, decelR, rightR, rightG, centerB, leftG, leftR]);
        //telling when battery SOC leds to turn on
        if (batMon.serialdata.SOC >= 66) {
            batG.on();
            batY.off();
            batR.off();
        }
        else if (batMon.serialdata.SOC < 66 && batMon.serialdata.turnAngle > 33) {
            batG.off();
            batY.on();
            batR.off();
        }
        else if (batMon.serialdata.turnAngle <= 33) {
            batG.off();
            batY.off();
            batR.on();
        }
        // connecting switches to relays
        rightSwitch.on("close", function() {
            rightRelay.blink();
        });
        rightSwitch.on("open", function() {
            rightRelay.stop();
            rightRelay.close();
        });
        leftSwitch.on("close", function() {
            leftRelay.blink();
        });
        leftSwitch.on("open", function() {
            leftRelay.stop();
            leftRelay.close();
        });
        hazardSwitch.on("close", function() {
            hazardRelay.blink();
        });
        hazardSwitch.on("open", function() {
            hazardRelay.stop();
            hazardRelay.close();
        });
        // telling turn angle leds to turn on
        if (batMon.serialdata.turnAngle > 45) {
            rightR.on();
            rightG.off();
            centerB.off();
            leftG.off();
            leftR.off();
        }
        else if (batMon.serialdata.turnAngle < 45 && batMon.serialdata.turnAngle > 5) {
            rightR.off();
            rightG.on();
            centerB.off();
            leftG.off();
            leftR.off();
        }
        else if (batMon.serialdata.turnAngle <= 5 && batMon.serialdata.turnAngle >= -5) {
            rightR.off();
            rightG.off();
            centerB.on();
            leftG.off();
            leftR.off();
        }
        else if (batMon.serialdata.turnAngle > -5 && batMon.serialdata.turnAngle > -45) {
            rightR.off();
            rightG.off();
            centerB.off();
            leftG.on();
            leftR.off();
        }
        else if (batMon.serialdata.turnAngle < -45) {
            rightR.off();
            rightG.off();
            centerB.off();
            leftG.off();
            leftR.on();
        }
        // telling accelerometer leds to turn on
        if (delta < -2) {
            accelR.on();
            accelG.off();
            stableB.off();
            decelG.off();
            decelR.off();
        }
        else if (delta >= -2 && delta < -.5) {
            accelR.off();
            accelG.on();
            stableB.off();
            decelG.off();
            decelR.off();
        }
        else if (delta >= -0.5 && delta <= 0.5) {
            accelR.off();
            accelG.off();
            stableB.on();
            decelG.off();
            decelR.off();
        }
        else if (delta > .5 && delta <= 2) {
            accelR.off();
            accelG.off();
            stableB.off();
            decelG.off();
            decelR.on();
        }
        else if (delta > 2) {
            accelR.off();
            accelG.off();
            stableB.off();
            decelR.off();
            decelG.on();
        }
    });
};
