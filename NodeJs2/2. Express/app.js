var express = require('express');
var app = express();

var request = require('request');

app.get("/", function(req, res) {
    res.send("Welcome to my website.");
});

app.get("/give_me_the_response", function(req, res) {
    var response = {"message": "Hello world."};
    response.code = 200;
    res.send(response);
});

app.get("/status", function(req, res) {
    res.sendStatus(200);
});


app.get("/animal/:myAnimal", function(req, res) {
    res.send(req.params.myAnimal);
})


app.get("/proxy-request", function(req, res) {
    request('http://www.google.com', function (error, response, body) {
        res.send(body);
    });
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("There was a problem with opening the server on port ", server.address().port);
    }
    console.log("Server is running on port", server.address().port);
});