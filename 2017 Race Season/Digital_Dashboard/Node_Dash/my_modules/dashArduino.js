var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");

exports.init = function() {
    var dashboard = new john.Board({
        id: "Dashboard Arduino",
        repl: false,
        debug: false
    });
    dashboard.on("ready", function() {
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

        var lights = john.Leds([batG, batY, batR, lastLap, accelG, accelR, stableB, decelG, decelR, rightR, rightG, centerB, leftG, leftR]);

        if (delta < -2) {

        }

    });
};
