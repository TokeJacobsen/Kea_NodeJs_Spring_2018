const mongo = require("mongodb").MongoClient;

const path = "mongodb://localhost:27017/node1"

mongo.connect(path, function( err, db) {
	const users = db.collection('people');

	const originalData = {"name": "Alice"};
	const newData = {$set: {"password": "T1"}};

	// add new field
	users.update(originalData, newData, function(err, data) {
		console.log(data);
	});
    db.close();
});

