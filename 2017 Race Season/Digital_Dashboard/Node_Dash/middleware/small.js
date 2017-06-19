
var ampdraw = 0;
var oldvoltage = 1;
var voltage = 0;
var oldAux = 1;
var auxVolt = 0;
var oldCharge = 1;
var charge = 0;
var chargeInt = 0;

var oldangle = 1;
var angle = 0;

var oldmph = 1;
var mph = 0;

function init(){ // This is the function the browser first runs when it's loaded.
console.log($(window).width());
var socket = io.connect();
//BATTERY MONITOR
socket.on('bmv', function(data) {
  ampdraw = data.I;
  oldvoltage = voltage; // Non-Repeating Data
  voltage = data.V;
  oldAux = auxVolt;
  auxVolt = data.VS;
  oldCharge = charge;
  charge = data.TTG;
  chargeInt = parseInt(charge);
  if (voltage != oldvoltage) {
    $('#mainV').html('Main V: ' + voltage);
  }
  if (auxVolt != oldAux) {
    $('#auxV').html('Aux V: ' + auxVolt);
  }
  if (charge != oldCharge) {
      $('#time').html('<a class="left">T:</a>'+ Math.floor(chargeInt/60) + ":" + (chargeInt-(Math.floor(chargeInt/60)*60)) + ".0");
  }
});
//POTENTIOMETER
socket.on('pot', function(data) {
  oldangle = angle;
  angle = data;
  angleNo = parseInt(angle) + 65.0;
  if (angleNo < 45) {
    g = Math.floor(255 * angleNo / 45);
    r = 255;
  } else {
    if (angleNo < 65) {
      r = Math.floor(255 * (-1 * (angleNo - 65)) / 20);
      g = 255;
    } else {
      if (angleNo < 85) {
        r = Math.floor(255 * ((angleNo - 65)) / 20);
        g = 255;
      } else {
        g = Math.ceil(255 * ((-1 * (angleNo - 130)) / 45));
        r = 255;
      }
    }
  }


  var colorVar = "rgb(" + r + "," + g + "," + 0 + ")";
  if (angle != oldangle) {
    var rotate = 'rotate(' + angle + 'deg)';
    $('#wheelOne').css({
      'transform': 'translateY(-40%)' + rotate,
      'background-color': colorVar
    });
    $('#wheelTwo').css({
      'transform': 'translateY(-40%)' + rotate,
      'background-color': colorVar
    });
  }
});
//WE NEED SPEED !!!
socket.on('mph', function(data) {
  oldmph = mph;
  mph = data;
  if (mph != oldmph) {
    $('#speed').html(mph);
  }
});
}
//Highcharts
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
              y = ampdraw*-1;
              //y = voltage;
          }, 1000);

          setInterval(function() {
            var x = (new Date()).getTime(),
              // current time
              y = ampdraw*-1;
              //y = voltage;
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
      text: 'Amp Draw (-mA)'
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
