Here's a `README.md` file for your project, formatted and structured for clarity. You can copy and paste it directly into your project:

```markdown
# MongoDB gRPC Server with Question Data Management

This project demonstrates a gRPC server for managing question data stored in MongoDB. It allows clients to retrieve questions by type or ID using the gRPC protocol. The server connects to a MongoDB database and supports bulk data insertion from a JSON file.

## Features

- **MongoDB Integration**: Uses MongoDB Atlas for storing and retrieving data.
- **gRPC Services**: Implements services to fetch questions by type and ID.
- **Data Import**: Supports importing questions from a JSON file.
- **Protobuf Definitions**: Uses `.proto` files to define gRPC services and messages.

---

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system.
2. **MongoDB Atlas**: Set up a MongoDB Atlas cluster.
3. **Environment Variables**: Add a `.env` file to configure the project.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following configuration:

   ```plaintext
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
   DB_NAME=<your-database-name>
   COLLECTION_NAME=questions
   PORT=50051
   ```

   Replace `<username>`, `<password>`, `<cluster-url>`, and `<database>` with your MongoDB Atlas credentials.

4. Prepare a `questions.json` file in the root directory with your question data.

---

## Required NPM Packages

Here is a list of required dependencies:

```bash
npm install dotenv mongodb grpc @grpc/grpc-js @grpc/proto-loader
```

---

## File Structure

```
project/
│
├── db/
│   └── connect.js         # MongoDB connection logic
│
├── proto/
│   └── search.proto       # Protobuf definitions for gRPC services
│
├── services/
│   └── searchService.js   # gRPC service implementations
│
├── .env                   # Environment variables
├── questions.json         # JSON file with question data
├── importData.js          # Script to import data from JSON file
├── insertData.js          # Additional script for bulk insertion
├── index.js               # gRPC server entry point
└── README.md              # Project documentation
```

---

## Usage

### 1. Import Data into MongoDB

Run the following command to import the question data into the MongoDB collection:

```bash
node importData.js
```

### 2. Start the gRPC Server

Start the gRPC server by running:

```bash
node index.js
```

The server will run on the port specified in the `.env` file (default: `50051`).

---

## gRPC Services

### 1. GetQuestionsByType

**Request**:  
```protobuf
message TypeRequest {
  string type = 1;
}
```

**Response**:  
```protobuf
message QuestionsResponse {
  repeated QuestionResponse questions = 1;
}
```

---

### 2. GetQuestionById

**Request**:  
```protobuf
message IdRequest {
  string id = 1;
}
```

**Response**:  
```protobuf
message QuestionResponse {
  string id = 1;
  string title = 2;
  string type = 3;
  string solution = 4;
}
```

---

## Example Question Data (questions.json)

```json
[
  {
    "_id": {
      "$oid": "665568f4ac3f6205c943a937"
    },
    "type": "ANAGRAM",
    "title": "Rearrange the letters to form a word",
    "solution": "TOY"
  },
  {
    "_id": {
      "$oid": "6654d0bc8571bf23e1bef300"
    },
    "type": "MCQ",
    "title": "Choose the correct synonym",
    "solution": "under"
  }
]
```

---

## Development

### gRPC Client

To test the gRPC services, you can use a gRPC client such as:

- **BloomRPC**: A desktop app to interact with gRPC servers.
- **Postman**: Supports gRPC requests.

---

## License

This project is licensed under the MIT License. Feel free to use it as a reference or build upon it.
```

Let me know if you'd like any additional details or modifications!
