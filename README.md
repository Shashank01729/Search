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
