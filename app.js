/*eslint-env node*/
//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


//my stuff ----------------------------------------------------------

// start server on the specified port and binding host
var server =app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url + " and port: "+appEnv.port);
});

var io = require('socket.io');
io = io.listen(server);

/*Create the queue and initialize it*/
var Queue = require('./serverJs/Queue.src.js');

var queue = new Queue();

var functions = require('./serverJs/functionsServer.js');


var mysql= require('mysql');


console.log("--------------------------------------------READY ------------------------------------------------");

//dowload queue from last sesion
//queueLastSesion();

/*initializing the websockets communication , server instance has to be sent as the argument */

//alguien se conecta a nuestro socket
io.sockets.on("connection",function(socket){
    /*Associating the callback function to be executed when client visits the page and
      websocket connection is made */
   //envia mensaje de connection with the server
      /*sending data to the client , this triggers a message event at the client side */
    console.log('Socket.io Connection with the client established');

   
      socket.on('disconnect', function(){ //si alguien se desconecta: log in console
      console.log('user disconnected');
    });

  });


