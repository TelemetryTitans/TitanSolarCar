//Refresh Rate in Milliseconds (Does not include graph)
var refreshRate = 100;
var json;
var parsed;

//var mphNew = localStorage.getItem('totalMiles').to;
var mph = 0;
var tens;
//angle
var degree = 0;
var rotate;
var degChange = 5;

//batmon
var ampdraw;
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
            parsed = JSON.parse(json);
            rotate = 'rotate(' + parsed.Angle + 'deg)';
            $('#wheelone').css('transform', rotate)
            $('#wheeltwo').css('transform', rotate)
        }
    }
    req.open("GET", 'reload.txt', true); // !!! NEEDS TO CHANGE TO JSON FILEPATH !!!
    req.send(null);
}

function init() // This is the function the browser first runs when it's loaded.
{
    refresh();
    var int = self.setInterval(function() {
        refresh()
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
                        var x = (new Date()).getTime()
                          , // current time
                        //y = ampdraw,
                        y = Math.random();
                        some = y;
                        if (degree == 45) {
                            degChange = -5;
                        }
                        if (degree == -45) {
                            degChange = 5;
                        }
                        degree += degChange;
                        if (mph < 50) {
                            mph += 1;
                        } else {
                            mph = 1;
                        }
                        if (y > 0.9) {
                            document.getElementById('ampss').style.background = 'red'
                        } else {
                            document.getElementById('ampss').style.background = 'blue'
                        }
                        tripdist += mph / 3600;
                        //mphNew += tripdist;
                        //localStorage.setItem("totalMiles", mphNew);
                        //console.log(localStorage.getItem('totalMiles'))
                        tripdistNew = tripdist.toFixed(3);
                        //console.log(tripdistNew);
                        $('#ampdraws').html(y.toFixed(3));
                        $('#spedometer').html(mph);
                        $('#triptext1').html(tripdistNew);
                    }, refreshRate);

                    setInterval(function() {
                        var x = (new Date()).getTime()
                          , // current time
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
                var data = [], time = (new Date()).getTime(), i;

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
