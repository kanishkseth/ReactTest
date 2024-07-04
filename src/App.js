import React, { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';
import BookDetailsComponent from './BookDetailsComponent';

function App() {
  const [book, setBook] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [loading, setLoading] = useState(false); // State for loading state

  const handleFormSubmit = (formData) => {
    setLoading(true); // Set loading state to true
    // Simulate API call or data processing delay (timeout)
    setTimeout(() => {
      setBook(formData);
      setDarkMode(true); // Enable dark mode on form submit
      setLoading(false); // Set loading state to false after data is loaded
    },900); // Simulating 2 seconds delay
  };

  const handleBack = () => {
    setLoading(true); // Set loading state to true
    // Simulate data processing delay (timeout)
    setTimeout(() => {
      setBook(null); // Clear book details
      setDarkMode(false); // Disable dark mode
      setLoading(false); // Set loading state to false after back action
    }, 1000); // Simulating 1 second delay
  };
  //App changes in commit 1
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}> {/* Conditionally apply dark mode class */}
      <header className="App-header">
        <h1>Book Information</h1>
      </header>
      <main>
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {book ? (
              <div className="submitted-data">
                <h2 style={{color:'green'}}>Submitted Book Details</h2>
                <BookDetailsComponent book={book} darkMode={darkMode} onBack={handleBack} />
              </div>
            ) : (
              <div className="form-container">
                <FormComponent onSubmit={handleFormSubmit} darkMode={darkMode} />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
