const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    console.log("A client connected");

    socket.on("this is the color", function(data) {
        const color = data.color;
        console.log("The client wants this color ", color);

        // send to all
        //io.emit("change to this color", {"color": color});

        // send only to the client itself
        //socket.emit("change to this color", {"color": color});        

        // send to all except the client itself
        //socket.broadcast.emit("change to this color", {"color": color});
    });
});


server.listen(3000, function() {
    console.log("Server is listening on port 3000");
});


