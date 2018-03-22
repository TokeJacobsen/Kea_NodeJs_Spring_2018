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

// Initialize knex with the connection configurations
const knex = Knex(knexConfig.development);

// Giving the knex connection to objection.js combining the two
Model.knex(knex);

// Convenience object that contains all the Models
const db = {
    "Knex": knex,
    "Message": require("./models/Message.js")
};
// the body of this post should have a message key
app.post("/add-message", function(req, res) {
    let response = {};

    db.Message.query().insert({
        "message": req.body.message
    }).then(persistedMessage => {
        response.status = 200;
        response.message = persistedMessage;

        res.send(response);
    }).catch( err => {
        response.status = 500;

        res.send(response);
    })

});



app.get("/get-messages", function(req, res) {
    let response = {};

    db.Message.query().select()
    .then(messages => {
        response.status = 200;
        response.messages = messages;

        res.send(response);
    }).catch(err => {
        response.status = 500;
        response.errorMessage = "Error querying the database. Might be because the login credentials or wrong or that the database isn't running.";

        res.send(response);
    });

});

const server = app.listen("3000", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started on ", server.address().port);
});