var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"))

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var playerOne = {"playerId": 1, "nickname": ""};
var playerTwo = {"playerId": 2, "nickname": ""};

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});



app.post("/register-user", function(req, res) {
    console.log(req.body);
    res.json(req.body);
});



var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Server couldn't start.");
    }
    console.log("Server started on port", server.address().port);
});