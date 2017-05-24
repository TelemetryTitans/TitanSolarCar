var ampdraw = 0;
var oldvoltage = 1;
var voltage = 0;

var oldangle = 1;
var angle = 0;

var oldmph = 1;
var mph = 0;

var height = ($(window).height() * 0.6);

var noww = Date.now();

var gaugeOptions = {
    greenColor: '#00a0ff',
    width: height,
    height: height,
    redFrom: 40,
    redTo: 50,
    yellowFrom: 30,
    yellowTo: 40,
    greenFrom: 0,
    greenTo: 30,
    majorTicks: [0, 10, 20, 30, 40, 50],
    minorTicks: 10,
    max: 50
  };
  
var lineOptions = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'AmpDraw'
    },
    legend: {
      position: none
    }
  };


function init() // This is the function the browser first runs when it's loaded.
{
  lineChart();
  gaugeChart();
  var socket = io.connect();
  //BATTERY MONITOR
  socket.on('bmv', function(data) {
    console.log(data);
    ampdraw = data.I;
    oldvoltage = voltage; // Non-Repeating Data
    voltage = data.V;
    if(voltage != oldvoltage){
      $('voltage').html(voltage);
    }
  });
  //POTENTIOMETER
  socket.on('pot', function(data) {
    oldangle = angle;
    angle = data;
    if(angle != oldangle){
      var rotate = 'rotate(' + data + 'deg)';
      $('#topLeft').css('transform', 'translateY(-40%)' + rotate);
      $('#topRight').css('transform', 'translateY(-40%)' + rotate);
    }
  });
  //WE NEED SPEED !!!
  socket.on('mph', function(data){
    oldmph = mph;
    mph = data;
    if(mph != oldmph){
      gaugechart();
    }
  });
}

google.charts.load('current', {
  'packages': ['gauge', 'line', 'corechart']
});
google.charts.setOnLoadCallback(lineChart, gaugeChart);

function lineChart(){
  var lineData = new google.visualization.DataTable();
      lineData.addColumn('number', 'X');
      lineData.addColumn('number', 'Dogs');

      lineData.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18]
      ]);
  
  var line = new google.visualization.LineChart(document.getElementById('container'));
  
  setInterval(function(){
    noww = Date.now();
    lineData.addRow([noww ,voltage]);
    lineData.removeRow(0);
    line.draw(lineData, lineOptions);
  }, 1000);
}

function gaugeChart(){
  
  var gaugeData = google.visualization.arrayToDataTable
  ([
    ['Label', 'Value'],
    ['Speed', mph]
  ]);
  
  var gauge = new google.visualization.Gauge(document.getElementById('gauge'));
  
  gaugeOptions.width = height;
  gaugeOptions.height = height;

  gauge.draw(gaugeData, gaugeOptions);
}
