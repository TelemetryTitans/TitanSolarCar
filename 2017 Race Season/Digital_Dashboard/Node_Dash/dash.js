var usbDetect = require('usb-detection');
var express = require('express');
var serialport = require('serialport');
var fs = require('fs');
var potfile = './assets/pot.json'
var potdata;

serialport.list(function(err, ports) {
  if (err) console.log(err.message);
  ports.forEach(function(port) {
    if (port.vendorId == 2341) {
      var portname = port.comName;
      var port = new serialport(portname, {
        baudRate: 115200,
        parser: serialport.parsers.readline("\r\n")
      });
      port.on('data', function(data) {
        potdata = JSON.stringify({
          Angle: data
        });
        fs.writeFile(potfile, potdata, 'utf-8');
      });
      port.on('error', function(err) {
        if (err) {
          console.log('ERROR');
          console.log('Exiting Dashboard');
          console.log('Error log: ', err.message);
          process.exit(1);
        }
      });
      port.on('disconnect', function() {
        port.close(function(err) {
          console.log(portname, 'serial port disconnected');
        });
      });
      port.on('open', function() {
        console.log('Open connection on Serial port: ', portname);
      });
    } else {
      console.log('Warning : No serial connection established on ', portname);
    }
  });
});

usbDetect.on('add', function(device) {
  serialport.list(function(err, ports) {
    if (err) console.log(err.message);
    ports.forEach(function(port) {
      if (port.vendorId == 2341) {
        var portname = port.comName;
        var port = new serialport(portname, {
          baudRate: 115200,
          parser: serialport.parsers.readline("\r\n")
        });
        port.on('data', function(data) {
          var potdata = JSON.stringify({
            Angle: data
          });
          console.log(potdata);
          fs.writeFile(potfile, potdata, 'utf-8');
        });
        port.on('error', function(err) {
          if (err) {
            console.log('ERROR');
            console.log('Exiting Dashboard');
            console.log('Error log: ', err.message);
            process.exit(1);
          }
        });
        port.on('disconnect', function() {
          port.close(function(err) {
            console.log(portname, 'serial port disconnected');
          });
        });
        port.on('open', function() {
          console.log('Open connection on Serial port: ', portname);
        });
      } else {
        console.log('Warning : No serial connection established on ', portname);
      }
    });
  });
});
var app = express();
var port = 1000;

app.set('view engine', 'ejs', '');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.render('sc');
});

app.listen(port, function() {
  console.log('Dashboard launched on port: ' + port);
});
