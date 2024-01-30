// Import required modules and dependencies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Create a new instance of ApolloServer with type definitions, resolvers, and context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Authentication middleware
});

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // Serve index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Start Apollo Server
const startApolloServer = async () => {
  await server.start(); // Start Apollo Server

  server.applyMiddleware({ app });

  // Start Express server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server now running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  });
};
};

// Call the async function to start the server
startApolloServer();