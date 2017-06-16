///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dashboard Application for Titan Solar Car 2016-2017 Race Team designed for telemetry data collection //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// if your new to node, you should know that node uses a module based system where any pre-written code needs to be "required" first
// make sure to first install all the necessary modules NOT INCLUDED , which are listed in package.json (under dependencies) or use 'npm install' command

// my_modules folder contains most of my code (used almost like classes) for the main javascript to run on node
// middleware folder contains all static files that need to be stored for initial html file to correctly run 
// views folder contains the html file that is served to the client on connection (extension is .ejs)

// find these two modules in the my_modules folder for more information on the code
// this module is for the webserver
var webDash = require("./my_modules/webDash.js");
//this module is for the battery monitor
var batMon = require("./my_modules/batMon.js");
//this module is for the johnny five arduino code
var jsArduino = require("./my_modules/jsArduino.js");
var potArduino = require("./my_modules/potArduino.js");
var hallArduino = require("./my_modules/hallArduino.js");
var dashArduino = require("./my_modules/dashArduino.js");
// module for logging data 
var json2csv = require('json2csv');
// built-in file system module for logging function
var fs = require('fs');

//setup for csv logging function
var log = fs.createWriteStream('TelemetryLog.csv', {
  'flags': 'a'
});
// function for logging data to csv file
logger = function() {
  var csv = json2csv({
    data: batMon.serialdata,
    hasCSVColumnTitle: false,
    quotes: ''
  });
  csv = Date() + "," + csv + "\n";
  log.write(csv, 'utf8');
};

//specify which port to host webserver on
webDash.port = 10000;

//Code that will initialize Dashboard Application
webDash.init();
//potArduino.init();
//batMon.init();
//hallArduino.init();
//dashArduino.init();
