const express = require("express");
const app = express();

// create the sockets server
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    console.log("A client connected");
});


server.listen(3000, function() {
    console.log("Server is listening on port 3000");
});


