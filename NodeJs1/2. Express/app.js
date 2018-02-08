var express = require('express');
var app = express();

app.get("/give_me_the_request", function(req, res) {
    var response = {
        "message": "Hello world."
    }
    res.send(response);
});

app.get("/sendStatus", function(req, res) {
    res.sendStatus(200);
});

app.listen(3000);