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

// Initialize knex with the connection configurations
const knex = Knex(knexConfig.development);

// Giving the knex connection to objection.js combining the two
Model.knex(knex);

// Convenience object that contains all the Models
const db = {
    "Knex": knex,
    "Message": require("./models/Message.js"),
    "User": require("./models/User.js")
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

app.post("/signup", function(req, res) {
    let response = {};

    // SELECT * FROM users WHERE username = some_user_name;

    db.User.query().select().where("username", req.body.username)
        .then(foundUsers => {
            if (foundUsers.length > 0) {
                response.status = 403;
                response.message = "user already exists";

                res.send(response);
            } else {
                bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
                    db.User.query().insert({
                        "username": req.body.username,
                        "password": hash
                    }).then(persistedUser => {
                        response.status = 200;
                        response.message = "user created";
    
                        res.send(response);
                    }).catch(err => {
                        response.status = 500;
                        response.errorMessage = "Error querying the database. Might be because the login credentials or wrong or that the database isn't running.";
            
                        res.send(response);
                    });
                });
            }
        }).catch(err => {
            response.status = 500;
            response.errorMessage = "Error querying the database. Might be because the login credentials or wrong or that the database isn't running.";

            res.send(response);
        })  
});

app.post("/login", function(req, res) {
    let response = {};
    // SELECT * FROM users WHERE username = some_user_name;

    db.User.query().select().where("username", req.body.x)
        .then(foundUsers => {
            if (foundUsers.length === 0) {
                response.status = 403;
                response.message = "user doesn't exist";

                res.send(response);
            } else {
                bcrypt.compare(req.body.password, foundUsers[0].password).then(function(found) {
                    if (found) {
                        response.status = 200;
                        response.message = "user found";
        
                        res.send(response);
                    } else {
                        response.status = 403;
                        response.message = "user doesn't exist";
                        
                        res.send(response);
                    }
                });

            }
        }).catch(err => {
            response.status = 500;
            response.errorMessage = "Error querying the database. Might be because the login credentials or wrong or that the database isn't running.";

            res.send(response);
        })
});


const server = app.listen("3000", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started on ", server.address().port);
});