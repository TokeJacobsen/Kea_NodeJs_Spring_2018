var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"))

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var playerOne = {"playerId": 1, "nickname": "", choice: ""};
var playerTwo = {"playerId": 2, "nickname": "", choice: ""};

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});



app.get("/get-users", function(req, res) {
    var response = {"status": 200, players: []};
    response.players.push(playerOne);
    response.players.push(playerTwo);
    res.json(response);
});


app.post("/register-user", function(req, res) {
    var response = {"status": 200, players: []};

    if (req.body.playerId === "1") {
        playerOne.nickname = req.body.chosenNickname;
    }
    if (req.body.playerId === "2") {
        playerTwo.nickname = req.body.chosenNickname;
    }
    response.players.push(playerOne);
    response.players.push(playerTwo);
    res.json(response);
});

// example rockScissorsPaperLogic("paper", "rock");

/* @return returns 1 if player 1 won, returns 2 if player 2 won or returns 0 if draw */
function rockScissorsPaperLogic(playerOneChoice, playerTwoChoice) {
// if choices are empty string then return "NOT YET"
    // THIS FOLLOWING IS WRONG!!!
    return Math.floor(Math.random() * Math.floor(3)); // Returning a random number 0, 1, 2... I expect the students to implement the logic
}


var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Server couldn't start.");
    }
    console.log("Server started on port", server.address().port);
});