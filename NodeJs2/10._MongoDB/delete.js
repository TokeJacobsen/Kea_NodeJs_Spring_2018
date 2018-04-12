const mongo = require("mongodb").MongoClient;

const path = "mongodb://localhost:27017/node1";

mongo.connect(path, function( err, db) {
	const users = db.collection("people");

	const nameObj = {"name": "Alice", "password": "T1"};

/*	users.remove(nameObj, function(err, success) {
		console.log(success);
	});*/

	users.deleteOne(nameObj, function(err, success) {
		console.log(success);
	});
    db.close();
});