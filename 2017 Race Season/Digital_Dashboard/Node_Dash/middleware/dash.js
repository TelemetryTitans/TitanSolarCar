var ampdraw = 0;
var oldvoltage = 1;
var voltage = 0;
var stamp = 0

var oldangle = 1;
var angle = 0;

var oldmph = 1;
var mph = 0;

var height = ($(window).height() * 0.6);

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


function init() // This is the function the browser first runs when it's loaded.
{
  gaugeChart();
  var socket = io.connect();
  //BATTERY MONITOR
  socket.on('bmv', function(data) {
    ampdraw = data.I;
    oldvoltage = voltage; // Non-Repeating Data
    voltage = data.V;
    if (voltage != oldvoltage) {
      $('#voltage').html('BAT V: ' + voltage);
    }
  });
  //POTENTIOMETER
  socket.on('pot', function(data) {
    oldangle = angle;
    angle = data;
    if (angle != oldangle) {
      var rotate = 'rotate(' + angle + 'deg)';
      $('#topLeft').css('transform', 'translateY(-40%)' + rotate);
      $('#topRight').css('transform', 'translateY(-40%)' + rotate);
    }
  });
  //WE NEED SPEED !!!
  socket.on('mph', function(data) {
    oldmph = mph;
    mph = data;
    if (mph != oldmph) {
      gaugechart();
    }
  });
}

google.charts.load('current', {
  'packages': ['gauge']
});
google.charts.setOnLoadCallback(gaugeChart);

$(document).ready(function() {
  var helloWorld = $('#container').html();
  Highcharts.setOptions({
    colors: ['#3d3d3d'],
    global: {
      useUTC: true
    }
  });

  Highcharts.chart('container', {
    chart: {
      backgroundColor: '#cecece',
      plotBackgroundColor: '#cecece',
      type: 'line',
      animation: Highcharts.svg,
      // don't animate in old IE
      marginRight: 4,
      events: {
        load: function() {
          var series = this.series[0];
          setInterval(function() {
            var x = (new Date()).getTime(), // current time
              //y = ampdraw,
              y = voltage;
            console.log(y);
          }, 1000);

          setInterval(function() {
            var x = (new Date()).getTime(),
              // current time
              //y = ampdraw,
              y = voltage;
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
      tickPixelInterval: 500
    },
    yAxis: {
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
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
            x: time + i * 1000,
            y: 0
          });
        }
        return data;
      }())
    }]
  });
});

function gaugeChart() {

  var gaugeData = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Speed', mph]
  ]);

  var gauge = new google.visualization.Gauge(document.getElementById('gauge'));

  gaugeOptions.width = height;
  gaugeOptions.height = height;

  gauge.draw(gaugeData, gaugeOptions);
}
