var http = require("http");
var path = require("path");
var mime = require("mime");
var router = require('./router.js').router;



var server = http.createServer(router);
var chatServer = require('./lib/chat_server.js');
chatServer.createChat(server);

server.listen(8080);