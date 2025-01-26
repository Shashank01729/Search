# SpeakX - gRPC-based Search Service with MongoDB

This project is a **gRPC-based search service** that interacts with a MongoDB Atlas database. It enables efficient querying of questions based on their type or ID. The project is built using Node.js, MongoDB, and gRPC.

## Features

- **MongoDB Integration**: Connects to MongoDB Atlas to store and retrieve questions.
- **gRPC Services**: Provides two gRPC methods:
  - `GetQuestionsByType`: Retrieves all questions of a specific type.
  - `GetQuestionById`: Retrieves a question by its unique ID.
- **Data Import**: Includes scripts to insert question data into MongoDB.

---

## Project Structure
```plaintext
project-directory/
├── db/
│   ├── connect.js          # MongoDB connection setup
│   └── importData.js       # Script to import question data into MongoDB
├── proto/
│   └── search.proto        # gRPC service definitions
├── services/
│   └── searchService.js    # gRPC method implementations
├── .env                    # Environment variables
├── questions.json          # Sample data for MongoDB insertion
├── index.js                # Main entry point for the gRPC server
└── package.json            # Project dependencies and scripts
```

## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine.

```bash
git clone <repository-url>
cd project-directory
```

Replace `<repository-url>` with the actual URL of the repository.

### 2. Install Dependencies
Once inside the project directory, run the following command to install the required Node.js modules.

```bash
npm install
```

   This will install the required packages listed in the `package.json` file, including:
   - `dotenv`: Loads environment variables from a `.env` file.
   - `@grpc/grpc-js`: The official gRPC Node.js package.
   - `@grpc/proto-loader`: A helper package to load `.proto` files for gRPC.
   - `path`: Provides utilities for working with file and directory paths.
     
### 3. Set Up Environment Variables

I have provided you with my own MongoDB Atlas environment variables. If you want to run MongoDB locally, you can follow these steps:

1. **Install MongoDB Locally**  
   - Download and install MongoDB from [here](https://www.mongodb.com/try/download/community).
   - Start MongoDB locally by running the following command in your terminal:

     ```bash
     mongod
     ```

   This will start MongoDB on the default port `27017`.

2. **Modify the `.env` File**  
   Create or modify the `.env` file in the root of the project. Here's the reference `.env` file you can use and modify for local MongoDB setup:

   Original `.env` file (MongoDB Atlas setup):

   ```bash
   MONGO_URI=mongodb+srv://shashankkrpandey123:8QDOACIcrdLb8l2G@cluster0.qbhmqbs.mongodb.net/speakx?retryWrites=true&w=majority
   DB_NAME=speakx
   COLLECTION_NAME=questions
   PORT=50051
   ```

   For local MongoDB, you should change the MONGO_URI to:
   
   ```bash
   MONGO_URI=mongodb://localhost:27017/speakx
   ```
   
   Here, we are connecting to the local MongoDB instance, and speakx is the database name. You can change it to any other name as per your preference.

3. Run the `insertData.js` Script

Once the .env file is updated, you can import the sample data into your MongoDB database by running the following command:

```bash
node db/importData.js
```

This script will insert the data from `questions.json` into your MongoDB database.

After these steps, your local MongoDB instance should be running, and you will have successfully set up the environment variables to connect to it.


## 4. Run the gRPC Server

Once everything is set up, you can start the gRPC server by running:

```bash
node index.js
```

This will start the server and bind it to the specified port. You should see a message like:

```
gRPC server running at http://localhost:50051
```

Your gRPC server is now up and running, and you can begin sending requests to it!

---

## 5. Additional Notes

- Make sure MongoDB is running locally or that your MongoDB Atlas connection details are correct.
- If you encounter any issues, ensure all environment variables are correctly set in the `.env` file.
- You can test the gRPC service using a gRPC client like [Postman](https://www.postman.com/) or by creating a client in another Node.js script.


## Watch the Video for `POSTMAN`

[![Watch the video](https://img.youtube.com/vi/HaSqh_kCpK4/0.jpg)](https://www.youtube.com/watch?v=HaSqh_kCpK4)
