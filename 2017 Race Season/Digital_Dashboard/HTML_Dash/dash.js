//Refresh Rate in Milliseconds (Does not include graph)
var refreshRate = 100;
var json;
var parsed;
var parsedOne;

//var mphNew = localStorage.getItem('totalMiles').to;
var mph = 0;
var tens;
//angle
var degree = 0;
var rotate;
var degChange = 5;

//batmon
var ampdraw = 0;
var voltage;

var tripdist = 0;
var tripdistNew;
var color = '#cecece';
var some;

function refresh() {
  var req = new XMLHttpRequest();
  console.log("Grabbing Value");
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      json = req.responseText;
      parsedOne = JSON.parse(json);
      ampdraw = parsedOne.ampDraw;
    }
  }
  req.open("GET", 'bmv.json', true); // !!! NEEDS TO CHANGE TO JSON FILEPATH !!!
  req.send(null);
}

function refreshOne() {
  var req = new XMLHttpRequest();
  console.log("Grabbing Value");
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      json = req.responseText;
      parsed = JSON.parse(json);
      rotate = 'rotate(' + parsed.Angle + 'deg)';
      $('#topLeft').css('transform', rotate + 'translateY(-40%)');
      $('#topRight').css('transform', rotate + 'translateY(-40%)');
      
    }
  }
  req.open("GET", 'pot.json', true); // !!! NEEDS TO CHANGE TO JSON FILEPATH !!!
  req.send(null);
}

function init() // This is the function the browser first runs when it's loaded.
{
  refresh();
  var int = self.setInterval(function() {
    refresh(),
    refreshOne()
  }, refreshRate);
}

$(document).ready(function() {
  var helloWorld = $('#regTitle').html();
  Highcharts.setOptions({
    colors: ['#3d3d3d'],
    global: {
      useUTC: true
    }
  });

  Highcharts.chart('container', {
    chart: {
      backgroundColor: color,
      plotBackgroundColor: color,
      type: 'line',
      animation: Highcharts.svg,
      // don't animate in old IE
      marginRight: 4,
      events: {
        load: function() {
          var series = this.series[0];
          setInterval(function() {
            var x = (new Date()).getTime(), // current time
              y = ampdraw;
            some = y;
          }, refreshRate);

          setInterval(function() {
            var x = (new Date()).getTime(), // current time
              //y = ampdraw,
              y = some;
            series.addPoint([x, y], true, true);
          }, 1000);

        }
      }
    },
    plotOptions: {
      series: {
        enableMouseTracking: false,
        marker: {
          enabled: false
        }
      },
      line: {
        linecap: 'square',
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Amp Draw'
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 500,
      lineColor: '#00a0ff'
    },
    yAxis: {
      gridLineColor: '#00a0ff',
      gridLineWidth: 2,
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#'
      }]
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + '</b><br/>' + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + Highcharts.numberFormat(this.y, 2);
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'Amp Draw',
      data: (function() {
        // generate an array of random data
        var data = [],
          time = (new Date()).getTime(),
          i;

        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * refreshRate,
            y: 0
          });
        }
        return data;
      }())
    }]
  });
});


var height = ($(window).height() * 0.6);
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Speed', 0]
        ]);

        var options = {
        	greenColor: '#00a0ff',
          width: height, height: height,
          redFrom: 40, redTo: 50,
          yellowFrom:30, yellowTo: 40,
          greenFrom:0, greenTo: 30,
          majorTicks: [0,10,20,30,40,50],
          minorTicks: 10,
          max: 50
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1,mph);
          options = {
        	greenColor: '#00a0ff',
          width: height, height: height,
          redFrom: 40, redTo: 50,
          yellowFrom:30, yellowTo: 40,
          greenFrom:0, greenTo: 30,
          majorTicks: [0,10,20,30,40,50],
          minorTicks: 10,
          max: 50
        };
          chart.draw(data, options);
          height = ($(window).height() * 0.6);
        }, 1000);
