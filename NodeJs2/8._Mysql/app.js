let express = require("express");
let app = express();

const bodyParser = require('body-parser');
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


app.post("/get-messages", function(req, res) {
    let response = {};

    response.status = 200;
    res.send(response);
});

const server = app.listen("3000", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started on ", server.address().port);
});