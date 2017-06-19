/////////////////////////////////////////////////////////////////////////////
// Webserver Dashbord module for defining the web server create function  //
///////////////////////////////////////////////////////////////////////////

//required modules for setting up webserver and websockets
var express = require('express');
var webApp = express();
var webServer = require('http').createServer(webApp);
var io = require('socket.io').listen(webServer);

//passes over specific websocket object
exports.io = io


//passes over function that setup and runs the webserver meant for the dashboard application
exports.init = function() {
    //establishes express required conditions to serve html,js,css files to client
    webApp.set('view engine', 'ejs', '');
    webApp.use('/assets', express.static('middleware'));
    webApp.get('/', function(req, res) {
        res.render('Homepage');
    });
    webApp.get('/15', function(req, res) {
        res.render('15HTML');
    });
    webApp.get('/7', function(req, res) {
        res.render('7HTML');
    });
    //begins the webserver on specified port
    webServer.listen(exports.port, function() {
        console.log('Dashboard launched on port: ' + exports.port);
        //test function for logging data (can be removed)
        logger();
        //test for websocket connection (can be removed)
        io.on('connection', function(data) {
            console.log('new websocket connection');
        });
    });
};
