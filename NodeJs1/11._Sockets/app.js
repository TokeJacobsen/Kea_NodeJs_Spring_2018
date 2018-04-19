const express = require('express');
const app = express();

const server = require('http').Server(app);
let io = require("socket.io")(server);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    console.log("A client connected");

});

const expressServer = app.listen("3000", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server is listening on port", expressServer.address().port);
});