require('dotenv').config();
const connectDB = require('./connect');
const { ObjectId } = require('mongodb');
const fs = require('fs');

const importData = async () => {
  const db = await connectDB();
  const collection = db.collection(process.env.COLLECTION_NAME);

  try {
    const data = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

    const formattedData = data.map((item) => {
      if (item._id?.$oid) item._id = new ObjectId(item._id.$oid);
      if (item.siblingId?.$oid) item.siblingId = new ObjectId(item.siblingId.$oid);
      return item;
    });

    const result = await collection.insertMany(formattedData);
    console.log(`${result.insertedCount} documents inserted!`);
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    process.exit(0);
  }
};

importData();
