///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Potentiometer Arduino module for initiating the aruino responsible for collecting any turn data      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//necesary modules for connecting arduino the webserver 
var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var dashPi = require("./dashPi.js");
var john = require("johnny-five");
// init function for main initialize js code
exports.init = function() {
    var turnAngle
        //establish arduino in johnny-five
    var potboard = new john.Board({
        port: "/dev/ttyACM0",
        id: "Potentiometer",
        repl: false,
        debug: false
    });
    //configure arduino for potentiometer
    potboard.on("ready", function() {
        var pot = new john.Sensor({
            pin: "A5",
            threshold: 3
        });
        //sending data over to websocket for webserver
        pot.on("change", function() {
            turnAngle = pot.scaleTo(65, -65);
            batMon.serialdata.Angle = turnAngle;
            dashPi.turnLed();
            webDash.io.emit('pot', batMon.serialdata.Angle);
        });

    });
};
