import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// Construct the main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Middleware to set authorization header with JWT token
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage
  const token = localStorage.getItem('id_token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create an Apollo client instance
const client = new ApolloClient({
  // Set up client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Wrap the entire application with ApolloProvider to provide ApolloClient to all components
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* Navbar component for navigation */}
          <Navbar />
          {/* Routes component to define routes */}
          <Routes>
            {/* Route for the SearchBooks page */}
            <Route path='/' element={<SearchBooks />} />
            {/* Route for the SavedBooks page */}
            <Route path='/saved' element={<SavedBooks />} />
            {/* Route to handle incorrect paths */}
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
