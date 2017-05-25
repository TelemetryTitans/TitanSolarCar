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
google.charts.setOnLoadCallback(lineChart, gaugeChart);

function lineChart() {
  var lineData = new google.visualization.DataTable();
  lineData.addColumn('number', 'X');
  lineData.addColumn('number', 'Dogs');

  lineData.addRows([
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
    [12, 30],
    [13, 40],
    [14, 42],
    [15, 47],
    [16, 44],
    [17, 48],
    [18, 52],
    [19, 54],
    [20, 42],
    [21, 55],
    [22, 56],
    [23, 57],
    [24, 60],
    [25, 50],
    [26, 52],
    [27, 51],
    [28, 49],
    [29, 53],
    [30, 55],
    [31, 60],
    [32, 61],
    [33, 59],
    [34, 62],
    [35, 65],
    [36, 62],
    [37, 58],
    [38, 55],
    [39, 61],
    [40, 64],
    [41, 65],
    [42, 63],
    [43, 66],
    [44, 67],
    [45, 69],
    [46, 69],
    [47, 70],
    [48, 72],
    [49, 68],
    [50, 66],
    [51, 65],
    [52, 67],
    [53, 70],
    [54, 71],
    [55, 72],
    [56, 73],
    [57, 75],
    [58, 70],
    [59, 68],
    [60, 64],
    [61, 60],
    [62, 65],
    [63, 67],
    [64, 68],
    [65, 69],
    [66, 70],
    [67, 72],
    [68, 75],
    [69, 80]
  ]);

  var line = new google.visualization.LineChart(document.getElementById('container'));

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
