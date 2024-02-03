const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Assuming MongoDB is running locally on default port

// Database Name
const dbName = 'mydatabase'; // Change this to your desired database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Select the database
    const db = client.db(dbName);
    
    // You can perform operations on the database here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection when you're done
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}

// Call the connectToMongoDB function to connect
connectToMongoDB();
