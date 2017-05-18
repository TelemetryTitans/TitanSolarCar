// modules
var SerialPort = require('serialport');
var express = require('express');
var usbDetect = require('usb-detection');
var fs = require('fs');
//variables
var bmvBool = false;
var potBool = false;
var parse;
var serialdata = {};
var potdata = {};
var bmvdata = {};
var app = express();
var port = 1000;
//functions
bmv = function(line) {
  parse_bmv(line);
  bmvdata = JSON.stringify({
    mainVoltage: serialdata.V,
    auxVoltage: serialdata.VS,
    midpointVoltage: serialdata.VM,
    batCurrent: serialdata.I,
    consumedAmpHours: serialdata.CE,
    soc: serialdata.SOC
  });
  fs.writeFile('./assets/bmv.json', bmvdata, 'utf-8');
}
pot = function(line) {
  serialdata.turnAngle = line;
  potdata = JSON.stringify({
    turnAngle: serialdata.turnAngle
  });
  fs.writeFile('./assets/pot.json', potdata, 'utf-8');
}
dashSetup = function() {
  app.set('view engine', 'ejs', '');
  app.use('/assets', express.static('assets'));
  app.get('/', function(req, res) {
    res.render('sc');
  });
  app.listen(port, function() {
    console.log('Dashboard launched on port: ' + port);
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
              console.log("Serial connection open on ", port.comName);
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
              console.log("Serial connection open on ", port.comName);
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
parse_bmv = function(line) {
  var res = line.split("\t");

  switch (res[0]) {
    case 'V':
      serialdata.V = Math.floor(res[1] / 10) / 100;
      break;
    case 'VS':
      serialdata.VS = Math.floor(res[1] / 10) / 100;
      break;
    case 'I':
      serialdata.I = res[1];
      break;
    case 'SOC':
      serialdata.SOC = res[1] / 10;
      break;
    case 'CE':
      serialdata.CE = res[1];
      break;
    case 'VPV':
      serialdata.VPV = Math.floor(res[1] / 10) / 100;
      break;
    case 'PPV':
      serialdata.PPV = res[1];
      break;
    case 'PID':
      serialdata.PID = res[1];
      break;
    case 'H20':
      serialdata.YT = res[1];
      break;
    case 'H22':
      serialdata.YY = res[1];
      break;
    case 'BMV':
      serialdata.BMV = res[1];
      serialdata.LONG = res[1];
      break;
  }
}

//code that fires
dashSetup();
findPorts();
usbDetect.on('add', function(device) {
  findPorts();
});
