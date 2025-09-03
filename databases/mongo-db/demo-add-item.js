const {MongoClient} = require('mongodb');

const uri = "mongodb://appuser:secret@localhost:27017/mydatabase?directConnection=true";
const client = new MongoClient(uri);

const movie = {title: 'The Matrix', year: 1999}

async function addItem() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");


        const db = client.db("mydatabase");
        const collection = db.collection("movies");
        await collection.insertOne(movie);
        console.log("Document inserted");
        await client.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


addItem();

