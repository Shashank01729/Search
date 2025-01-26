require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const searchService = require('./services/searchService');

const PORT = process.env.PORT || 50051;

const PROTO_PATH = path.join(__dirname, 'proto', 'search.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const searchProto = grpc.loadPackageDefinition(packageDefinition).SearchService;

const server = new grpc.Server();

server.addService(searchProto.service, searchService);

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Error starting gRPC server:', err);
    process.exit(1);
  }
  console.log(`gRPC server running on port ${port}`);
  server.start();
});