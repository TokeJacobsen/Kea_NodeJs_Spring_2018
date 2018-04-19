const express = require("express");
const app = express();

const server = require("http").Server(app);
let io = require("socket.io")(server);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


io.on("connection", (socket) => {
    console.log("A client connected!");

    socket.on("this is the color", function(data) {
        const color = data.color;

        // send the color to all
        io.emit("change to this color", {"color": color});

        // send back to the client itself
        socket.emit("change to this color", {"color": color});

        // send to all except the client itself
        socket.broadcast.emit("change to this color", {"color": color});        
    })
});

server.listen("3000", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started on port 3000");
});