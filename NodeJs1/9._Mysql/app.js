let express = require("express");
let app = express();

const bodyParser = require('body-parser');
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    "Message": require("./models/Message.js"),
    "User": require("./models/User.js")
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

app.post("/signup", function(req, res) {
//    select * from users where username = 'some_user_name';
    let response = {};

    const username = req.body.username;
    const password = req.body.password;

    db.User.query().select().where('username', username)
        .then(foundUsers => {
            if (foundUsers.length > 0) {
                response.message = "user already exists by that name";
                response.status = 200;
                res.send(response)
            } else {
                // we are ready to sign up a user .. remember to do proper validation here

                bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
                    db.User.query().insert({
                        "username": username,
                        "password": hash,
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "telephoneNumber": req.body.telephoneNumber
                    })
                        .then(persistedUser => {
                            response.status = 200;
                            response.message = "user signed up";
                            res.send(response);
                        }).catch(err => {
                            response.status = 500;
                            response.message = "error saving the user to the database";
                            res.send(response);                        
                        });
                });

            }
        }).catch(err => {
            response.status = 500;
            response.message = "error connecting or quering the database";
            res.send(response);
        });

});

app.post("/login", function(req, res) {
    let response = {};

  
        db.User.query().select().where({
            "username": req.body.username
        }).then(foundUsers => {
            if (foundUsers.length === 0) {
                response.status = 403; // forbidden
                response.message = "no such user found";
                res.send(response);
            } else {
                bcrypt.compare(req.body.password, foundUsers[0].password).then(function(res) {
                    // need to change the res to some other name above.. 
                    if (res === true) {
                        response.status = 200;
                        res.send(response);
                    } else {
                        response.status = 403; // forbidden
                        response.message = "no such user found";
                        res.send(response);
                    }
                });
            }
        }).catch(err => {
            response = 500;
            response.message = "error connecting or quering the database";
            res.send(response);
        });

});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error starting the server", err);
    }
    console.log("Starting the server on port", server.address().port);
});