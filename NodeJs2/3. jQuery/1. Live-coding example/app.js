var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Couldn't start the server ", err);
    }
    console.log("Server started on port", server.address().port);
});