//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hall Effect arduino module for initiating the arduino responsible for gathering rpm and mph calculation //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// necessary modules for connectina arduino module to webserver
var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");

//necesary variables to begin speedometer calculation
var rotations = 0;
var rpm = 0;
var mph = 0;
var kmh = 0;
var numMag = 1;
var RMtoMPH = 0.08032481216;
var wheel = 27; //Circumference of the wheel

//function that calculates rpm from # of rotations in a second, and then calculates mph from rpm

//init function for main initialize js code
exports.init = function() {
    //establush arduino in johnny-five
    var hallboard = new john.Board({
        id: "speedometer",
        repl: false,
        debug: true
    });
    //configure arduino for hall effect sensor
    hallboard.on("ready", function() {
        var hall = new john.Sensor({
            pin: 2,
            type: "digital",
            freq: 500
        });
        //interrupt style event to count each wheel rotation
        hall.on("change", function() {
            console.log(hall.value);
            if (hall.value == 1) {
                rotations++;
                console.log(rotations);
                //update odometer
            }
        });
        hall.on("data", function(){
          rpm = (rotations * 60) / numMag;
          console.log("rpm: " + rpm);
          mph = (60 * (wheel / 12) * Math.PI * rpm) / 5280; // Miles per Hour
          kmh = mph * 1.609344; // Kilometers per Hour
          console.log("mph: " + mph);
          rotations = 0;
        });
        // call calculation every second
        //setInterval(calcSpeed, 500);
    });
};
