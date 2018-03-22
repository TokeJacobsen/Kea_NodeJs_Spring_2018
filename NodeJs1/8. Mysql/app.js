let express = require("express");
let app = express();

const bodyParser = require('body-parser');
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const objection = require("objection");
const Model = objection.Model;
const Knex = require("knex");
const knexConfig = require("./knexfile.js");

const knex = Knex(knexConfig.development);

// give the knex connection to objection.js
Model.knex(knex);

// convenience object that contains all the models and easy access to knex
const db = {
    "Knex": knex,
    "Message": require("./models/Message.js")
}

// post body should contain a message key
app.post("/add-message", function(req, res) {
    let response = {};
    
    db.Message.query().insert({
        message: req.body.message
    }).then(persistedMessage => {
        response.status = 200;
        response.message = persistedMessage;

        res.send(response);
    }).catch(err => {
        response.status = 500;
        response.error = err;
        response.message = "Error querying the database. Might be an error with the config or the server hosting the database is down.";

        res.send(response);
    });
});

app.get("/get-messages", function(req, res) {
    let response = {};

    db.Message.query().select()
    .then(messages => {
        response.messages = messages;
        response.status = 200;

        res.send(response);
    }).catch(err => {
        response.status = 500;

        res.send(response);
    });
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error starting the server", err);
    }
    console.log("Starting the server on port", server.address().port);
});