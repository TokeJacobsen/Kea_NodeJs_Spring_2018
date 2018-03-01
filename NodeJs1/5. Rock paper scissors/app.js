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



// inside of here register the user to the right player object
// give status code, playerId and the choosen nickname as response
// once the data is returned to the client we want to update some html on the webpage 
// so we can see that the user has registered properly
app.post("/register-user", function(req, res) {
    console.log(req.body);
    res.json(req.body);
});

// todo create 1 - ONE - method that takes a selection and depending on rock paper scissor selection  updates some kind of datatype on the server for who won.. 
// this datatype can be used quickly by the result get request
// recommendation use request parameter for selection and color the icon so the user knows that they've clicked it


// todo return the result and update the client side page background color (Or something else) to indicate winner, loser, draw
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