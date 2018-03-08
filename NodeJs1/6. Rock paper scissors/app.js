var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


var player1 = {"playerId": 1, "nickname": "", choice: ""};
var player2 = {"playerId": 2, "nickname": "", choice: ""};


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});



// todo create a get request that gives us the players.... 
app.get("/get-users", function(req, res) {
    var response = {"status": 200, players: []};
    response.players.push(player1);
    response.players.push(player2);
    res.json(response);
});

app.post("/register-user", function(req, res) {
    if (req.body.playerId === "1") {
        player1.nickname = req.body.choosenNickname;
    }
    if (req.body.playerId === "2") {
        player2.nickname = req.body.choosenNickname;
    }
    var response = {"status": 200, players: []};
    response.players.push(player1);
    response.players.push(player2);
    res.json(response);
});

// Ex. URL: choose/rock?playerId=1
app.get("/choose/:choice", function(req, res) {
    console.log("This is the choice: ", req.params.choice);
    console.log("This is the player id: ", req.query.playerId);
    // of course you have to set the choice on the player and give a better response (response json object)
    res.send("ok")
});

app.get("/get-results", function(req, res) {
    var response = {"status": 200};
                                    // player1.choice, player2.choice
    if (player1.choice === "" || player2.choice === "") {
         response.winner = "no one";
    } else {
        response.winner = rockScissorsPaperLogic(player1.choice, player2.choice);
    }   
    res.json(response);
});

/* @return 0 means draw, 1 means player 1 won and 2 means player 2 won */
function rockScissorsPaperLogic(player1Choice, player2Choice) {

    // THIS IS WRONG!!!
    return Math.floor(Math.random() * Math.floor(3)); // Returning a random number 0, 1, 2... I expect the students to implement the logic
}

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Couldn't run the server on port", server.address().port);
    }
    console.log("Server is running on port", server.address().port);
});