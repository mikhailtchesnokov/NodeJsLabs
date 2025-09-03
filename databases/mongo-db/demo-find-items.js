const {MongoClient} = require('mongodb');

const uri = "mongodb://appuser:secret@localhost:27017/mydatabase?directConnection=true";
const client = new MongoClient(uri);

async function findItems() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("mydatabase");
        const collection = db.collection("movies");
        var movies = await collection.find().toArray();
        console.log("Documents found:\n", movies);
        await client.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


async function findLastItem() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("mydatabase");
        const collection = db.collection("movies");
        var movies = await collection.find({year: 2001}).toArray();
        console.log("Documents found:\n", movies);
        await client.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

//findItems();
findLastItem();
