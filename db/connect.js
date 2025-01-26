require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(process.env.DB_NAME);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
