import React from 'react';
import { Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_BOOK } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const SavedBooks = () => {
  // Use useQuery hook to execute GET_ME query on load
  const { loading, data } = useQuery(GET_ME);

  // Use useMutation hook to execute REMOVE_BOOK mutation
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);
  
  // Extract userData from data, default to an empty object if data is undefined
  const userData = data?.me || {};

  // Function to handle deletion of a book
  const handleDeleteBook = async (bookId) => {
    // Get token if user is logged in
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // Return false if token is not available
    if (!token) {
      return false;
    }

    try {
      // Execute the REMOVE_BOOK mutation
      const response = await removeBook({ variables: { bookId } });
      console.log('Deleted record: ', response);

      // Log any errors
      if (error) {
        console.log(error);
      }
      
      // Remove bookId from localStorage upon successful deletion
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // Render loading message while data is being fetched
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
       <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {/* Map through savedBooks and render each book as a Card */}
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {/* Render book image if available */}
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {/* Button to handle book deletion */}
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
