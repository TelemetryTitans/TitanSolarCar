var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");

exports.init = function() {
    var potboard = new john.Board({
        id: "Potentiometer",
        repl: false,
        debug: true
    });
    potboard.on("ready", function() {
        var pot = new john.Sensor({
            pin: "A5",
            threshold: 3
        });
        pot.on("change", function() {
            console.log(pot.scaleTo(-65, 65));
            batMon.serialdata.turnAngle = pot.scaleTo(-65, 65);
            webDash.io.emit('pot', batMon.serialdata.turnAngle);
        });

    });
};
