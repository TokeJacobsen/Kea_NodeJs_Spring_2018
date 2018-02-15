var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error running the server");
    }
    console.log("Server started on port", server.address().port)
});