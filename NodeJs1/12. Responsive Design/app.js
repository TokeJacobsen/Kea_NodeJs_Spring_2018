const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const server = app.listen("3000", (err) => {
    console.log("Server is listening on port", server.address().port);
})