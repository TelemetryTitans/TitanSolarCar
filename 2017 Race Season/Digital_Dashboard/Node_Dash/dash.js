var express = require('express');
var serialport = require('serialport');



if(process.argv[2]){
  var portname1 = process.argv[2];
  var port1 =  new serialport(portname1, {
    baudRate : 9600,
    parser   : serialport.parsers.readline("\r\n")
  });

  port1.on('error', function(err){
    if (err){
      console.log('ERROR');
      console.log('Exiting Dashboard');
      console.log('Error log: ', err.message );
      process.exit(1);
    }
  });
  port1.on('open', function onOpen() {
    console.log('Open connection on Serial port: ',portname1);
  });
  port1.on('data', function onData(data) {
    console.log(data);
  });
} else {
  console.log('No serial connections established');
  console.log('Please specify a serial port for serial data (e.g. node dash COM12)');
}

var app = express();
var port = 1000;

app.set('view engine', 'ejs', '');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
  res.render('sc');
});

app.listen(port, function(){
  console.log('Dashboard launched on port: ' + port);
});
