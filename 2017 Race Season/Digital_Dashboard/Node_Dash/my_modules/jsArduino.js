var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");

var rotations = 0;
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
    var boards = new john.Boards([{
        id: "A",
        //port: "/dev/ttyACM0",
        repl: false,
        debug: true
    }, {
        id: "B",
        //port: "/dev/ttyACM1",
        repl: false,
        debug: false
    }, {
        id: "C",
        //port: "/dev/ttyACM2",
        repl: false,
        debug: false
    }]);
    boards.on("ready", function() {
        var pot = new john.Sensor({
            pin: "A5",
            threshold: 3,
            board: this.byId("A")
        });
        pot.on("change", function() {
            console.log(this.scaleTo(-65, 65));
            batMon.serialdata.turnAngle = this.scaleTo(-65, 65);
            webDash.io.emit('pot', batMon.serialdata.turnAngle);
        });

        var hall = new john.Sensor({
            pin: 2,
            type: "digital",
            board: this.byId("B")
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
