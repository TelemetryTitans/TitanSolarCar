var express = require('express');
var serialport = require('serialport');

if(process.argv[2]){
  console.log("tested");
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
