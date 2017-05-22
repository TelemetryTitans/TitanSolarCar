// modules
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var SerialPort = require('serialport')
var usbDetect = require('usb-detection')

//variables
var bmvBool = false;
var potBool = false;
var parse;
var serialdata = {};
var port = 1000;
//functions
parseBMV = function(line) {
  var serial = line.split("\t");

  switch (serial[0]) {
    case 'V':
      serialdata.V = Math.floor(serial[1] / 10) / 100;
      break;
    case 'VS':
      serialdata.VS = Math.floor(serial[1] / 10) / 100;
      break;
    case 'I':
      serialdata.I = serial[1];
      break;
    case 'SOC':
      serialdata.SOC = serial[1] / 10;
      break;
    case 'CE':
      serialdata.CE = serial[1];
      break;
    case 'VPV':
      serialdata.VPV = Math.floor(serial[1] / 10) / 100;
      break;
    case 'PPV':
      serialdata.PPV = serial[1];
      break;
    case 'PID':
      serialdata.PID = serial[1];
      break;
    case 'H20':
      serialdata.YT = serial[1];
      break;
    case 'H22':
      serialdata.YY = serial[1];
      break;
    case 'BMV':
      serialdata.BMV = serial[1];
      serialdata.LONG = serial[1];
      break;
  }
}
bmv = function(line) {
  parseBMV(line);
  io.emit('bmv', serialdata);
}
pot = function(line) {
  serialdata.turnAngle = line;
  io.emit('pot', serialdata.turnAngle);
}
dashSetup = function() {
  app.set('view engine', 'ejs', '');
  app.use('/assets', express.static('assets'));
  app.get('/', function(req, res) {
    res.render('sc');
  });
  server.listen(port, function() {
    console.log('Dashboard launched on port: ' + port);
    io.on('connection', function(data) {
      console.log('connected');;
    });
  });
}
findPorts = function() {
  SerialPort.list(function(err, ports) {
    ports.forEach(function(port) {
      switch (port.productId) {
        case '0043':
        case '7523':
          if (potBool == false) {
            var serial = new SerialPort(port.comName, {
              baudRate: 115200,
              parser: SerialPort.parsers.readline('\r\n')
            });
            serial.on('data', function(line) {
              pot(line);
            });
            serial.on('open', function() {
              console.log("Arduino Uno connection open on ", port.comName);
              potBool = true;
            });
            serial.on('disconnect', function() {
              serial.close(function(err) {
                console.log(port.comName, 'serial port disconnected');
                potBool = false;
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
            process.on('uncaughtException', function(err) {
              serial.close(function(err) {
                console.log(port.comName, 'serial port disconnected');
                potBool = false;
              });
            });
          }
          break;
        case '6015':
          if (bmvBool == false) {
            var serial = new SerialPort(port.comName, {
              baudRate: 19200,
              parser: SerialPort.parsers.readline('\r\n')
            });
            serial.on('data', function(line) {
              bmv(line);
            });
            serial.on('open', function() {
              console.log("BMV 702 connection open on ", port.comName);
              bmvBool = true;
            });
            serial.on('disconnect', function() {
              serial.close(function(err) {
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
}

//code that fires
dashSetup();
findPorts();
usbDetect.on('add', function(device) {
  findPorts();
});
