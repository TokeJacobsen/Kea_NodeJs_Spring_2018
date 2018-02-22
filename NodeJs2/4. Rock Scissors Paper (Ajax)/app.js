var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"))


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Server couldn't start.");
    }
    console.log("Server started on port", server.address().port);
});