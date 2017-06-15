var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");

var rotations = 1;
var rpm = 0;
var mph = 0;
var numMag = 1;
var RMtoMPH = 16.161616;
var calcSpeed = function() {
    rpm = (rotations * 60) / numMag;
    console.log("rpm: " + rpm);
    mph = rpm * RMtoMPH;
    console.log("mph: " + mph);
    rotations = 0;
};

exports.init = function() {
    var hallboard = new john.Board({
        id: "speedometer",
        repl: false,
        debug: true
    });
    hallboard.on("ready", function() {
        var hall = new john.Sensor({
            pin: 2,
            type: "digital"
        });
        //setInterval(calcSpeed, 1000);
        hall.on("change", function() {
            console.log(hall.value);
            if (hall.value == 1) {
                rotations++;
                console.log(rotations);
            }
        });

    });
};
