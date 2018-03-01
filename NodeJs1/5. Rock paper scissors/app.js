var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


var player1 = {"playerId": 1, "nickname": ""};
var player2 = {"playerId": 2, "nickname": ""};


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});



// todo create a get request that gives us the players.... 


app.post("/register-user", function(req, res) {
    console.log(req.body);
    res.json(req.body);
});


app.get("/get-results", function(req, res) {
    var response = {"status": 200};
    response.message = "Maybe you won or maybe you lost";
    res.json(response);
});


var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Couldn't run the server on port", server.address().port);
    }
    console.log("Server is running on port", server.address().port);
});