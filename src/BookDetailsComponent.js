// BookDetailsComponent.js
import React, { useState, useEffect } from 'react';

const BookDetailsComponent = ({ book, darkMode, onBack }) => {
  const [loading, setLoading] = useState(false); // State for loading state

  useEffect(() => {
    setLoading(true);
    // Simulate data processing delay (timeout)
    setTimeout(() => {
      setLoading(false); // Set loading state to false after initial load
    }, 100); // Simulating 1.5 second delay
  }, []);

  return (
    <div className={`book-details ${darkMode ? 'dark-text' : 'light-text'}`}>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <h2>Book Details</h2>
          <table>
            <tbody>
              <tr>
                <td>Title:</td>
                <td>{book.title}</td>
              </tr>
              <tr>
                <td>Author:</td>
                <td>{book.author}</td>
              </tr>
              <tr>
                <td>ISBN:</td>
                <td>{book.isbn}</td>
              </tr>
              <tr>
                <td>Ratings:</td>
                <td>{book.ratings}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{book.price}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={onBack}>Back</button>
        </>
      )}
    </div>
  );
};

export default BookDetailsComponent;
