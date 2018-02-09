var express = require('express');
var app = express();

var messages = [];  

app.get("/", function(req, res) {
    res.send("Welcome to my website.");
});

app.get("/give_me_the_request", function(req, res) {
    var response = {
        "message": "Hello world."
    }
    res.send(response);
});

app.get("/sendStatus", function(req, res) {
    res.sendStatus(200);
});

app.get("/give_server_info/:myParam", function(req, res) {
    res.send(req.params.myParam);
})

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("There was an error starting the server on port ", server.address().port);
    }
    console.log("Server is running on port ", server.address().port);
});