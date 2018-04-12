var mongo = require("mongodb").MongoClient;

var path = "mongodb://localhost:27017/node1";

// db is the socket (connection object)
mongo.connect(path, function( err, db ) {
	
	var peopleCollection = db.collection('people');
    
    peopleCollection.find({"name": "Alice"}).limit(1).toArray( function( err, foundUsers ) {
		console.log( foundUsers );
	});
    db.close();
});
