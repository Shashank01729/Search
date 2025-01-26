require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

const convertOidFields = (data) => {
  return data.map((item) => {
    if (item._id && item._id.$oid) {
      item._id = new ObjectId(item._id.$oid); // Convert $oid to ObjectId
    }
    if (item.siblingId && item.siblingId.$oid) {
      item.siblingId = new ObjectId(item.siblingId.$oid); // Convert siblingId $oid to ObjectId
    }
    return item;
  });
};

const insertData = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    let data = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

    data = convertOidFields(data);

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted!`);

    await client.close();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData();
