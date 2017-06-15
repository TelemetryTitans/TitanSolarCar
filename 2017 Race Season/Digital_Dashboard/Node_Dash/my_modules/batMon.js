///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Battery Monitor module for creating the battery monitor search function and battery monitor parsing function //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//requred modules for handling serial ports and websockets
var webDash = require("./webDash.js");
var SerialPort = require('serialport');

var bmvBool = false;
exports.serialdata = {};

//functions
var parsebmv = function(line) {
    var column = line.split("\t");

    switch (column[0]) {
        case 'V':
            exports.serialdata.V = Math.floor(column[1] / 10) / 100;
            break;
        case 'VS':
            exports.serialdata.VS = Math.floor(column[1] / 10) / 100;
            break;
        case 'I':
            exports.serialdata.I = column[1];
            break;
        case 'SOC':
            exports.serialdata.SOC = column[1] / 10;
            break;
        case 'CE':
            exports.serialdata.CE = column[1];
            break;
        case 'VPV':
            exports.serialdata.VPV = Math.floor(column[1] / 10) / 100;
            break;
        case 'PPV':
            exports.serialdata.PPV = column[1];
            break;
        case 'PID':
            exports.serialdata.PID = column[1];
            break;
        case 'H20':
            exports.serialdata.YT = column[1];
            break;
        case 'H22':
            exports.serialdata.YY = column[1];
            break;
        case 'BMV':
            exports.serialdata.BMV = column[1];
            exports.serialdata.LONG = column[1];
            break;
        case 'TTG':
            exports.serialdata.TTG = column[1];
            break;
    }
};
var bmv = function(line) {
    parsebmv(line);
    webDash.io.emit('bmv', exports.serialdata);
};

exports.init = function() {
    SerialPort.list(function(err, ports) {
        if (err) {
            throw err;
        }
        ports.forEach(function(port) {
            switch (port.productId) {
                case '6015':
                case '0x6015':
                    if (bmvBool == false) {
                        var serial = new SerialPort(port.comName, {
                            baudRate: 19200,
                            parser: SerialPort.parsers.readline('\r\n')
                        });
                        serial.on('data', function(line) {
                            bmv(line);
                            //  logger()
                        });
                        serial.on('open', function() {
                            console.log("BMV 702 connection open on ", port.comName);
                            bmvBool = true;
                        });
                        serial.on('disconnect', function() {
                            serial.close(function(err) {
                                if (err) {
                                    throw err;
                                }
                                console.log(port.comName, 'serial port disconnected');
                                bmvBool = false;
                            });
                        });
                        serial.on('error', function(err) {
                            if (err) {
                                console.log('ERROR');
                                console.log('Exiting Dashboard');
                                console.log('Error log: ', err.message);
                                process.exit(1);
                            }
                        });
                    }
                    break;
                default:
                    break;
            }


        });
    });
};
