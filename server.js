var http = require("http");
var path = require("path");
var mime = require("mime");
var router = require('./router.js').router;
var socketIO = require('socket.io');


var server = http.createServer(router);
console.log('Server running at http://127.0.0.1:8080/');
var socketServer = socketIO.listen(server);

socketServer.on("connection", function(socket) {
  socket.on("submit-message", function(data) {
    console.log("message received: " + data);
    socketServer.sockets.emit("new-message", data);
  });
});

server.listen(8080);