var express = require('express');
var app = express();

var messages = [];

app.get("/", function(req, res) {
    res.send(messages);
});

app.get("/message/:myMessage", function(req, res) {
    messages.push(req.params.myMessage);
    res.send(req.params.myMessage);
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Couldn't start the server.");
    }
    console.log("Started server on port", server.address().port);
})