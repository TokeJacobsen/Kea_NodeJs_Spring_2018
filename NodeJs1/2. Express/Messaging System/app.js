var express = require('express');
var app = express();

var messageList = [];

function sendMessage(message){
    messageList.push(message);
}

app.get("/messages", function(req, res) {
    res.send(messageList);
});

app.get("/sendMessage/:myParam", function(req,res){
    sendMessage(req.params.myParam);
    res.send("Sending message " + req.params.myParam);
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("There was an error running the server.");
    }
    console.log("Running the server on port ", server.address().port);
});