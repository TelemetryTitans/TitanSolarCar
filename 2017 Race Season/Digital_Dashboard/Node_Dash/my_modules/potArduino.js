///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Potentiometer Arduino module for initiating the aruino responsible for collecting any turn data      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//necesary modules for connecting arduino the webserver 
var batMon = require("./batMon.js");
var webDash = require("./webDash.js");
var john = require("johnny-five");
// init function for main initialize js code
exports.init = function() {
    //establish arduino in johnny-five
    var potboard = new john.Board({
        id: "Potentiometer",
        repl: false,
        debug: true
    });
    //configure arduino for potentiometer
    potboard.on("ready", function() {
        var pot = new john.Sensor({
            pin: "A5",
            threshold: 3
        });
        //sending data over to websocket for webserver
        pot.on("change", function() {
            console.log(pot.scaleTo(65, -65));
            batMon.serialdata.turnAngle = pot.scaleTo(65, -65);
            webDash.io.emit('pot', batMon.serialdata.turnAngle);
        });

    });
};
