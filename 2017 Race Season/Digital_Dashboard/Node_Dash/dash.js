var express = require('express');
var serialport = require('serialport');



if(process.argv[2]){
  var portname1 = process.argv[2];
  var port1 =  new serialport(portname1, {
    baudRate : 9600,
    parser   : serialport.parsers.readline("\r\n")
  });

}

var app = express();
var port = 1000;

app.set('view engine', 'ejs', '');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
  res.render('sc');
});

app.listen(port, function(){
  console.log('app listening on port ' + port);
});
