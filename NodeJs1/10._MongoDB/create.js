const mongo = require("mongodb").MongoClient;

let path = "mongodb://localhost:27017/node1";

mongo.connect(path, function(err, db) {
    if (err) {
        console.log("There was an error running mongodb", err);
    }

    let collection = db.collection("people");

    let newPerson = {
                        "name": "Alice"
                    }

    collection.insert(newPerson, function(err, success) {
        console.log(success);
    });

});