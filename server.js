var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequest7000 (request, response) {
    response.end("You are awesome");
}

function handleRequest7500 (request, response) {
    response.end("You are bad");
}

var server7000 = http.createServer(handleRequest7000);
var server7500 = http.createServer(handleRequest7500);

server7000.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

server7500.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO);
});

