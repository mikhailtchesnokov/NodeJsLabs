const {MongoClient} = require('mongodb');

const uri = "mongodb://root:example@localhost:27017/admin?directConnection=true";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("testdb"); // your app DB
        await db.createCollection("users");
        console.log("Collection created");
        await client.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

run();
