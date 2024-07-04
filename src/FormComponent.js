// FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
    const greenTextStyle = {
        color: 'green',
      };
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    ratings: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      author: '',
      isbn: '',
      ratings: '',
      price: '',
    });
  };

  return (
    <div>
      <h2 style={greenTextStyle} >Enter Book Details</h2>
      <form onSubmit={handleSubmit}>
        <table className="form-table">
          <tbody>
            <tr>
              <td>Title:</td>
              <td>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>
                <input type="text" name="author" value={formData.author} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>ISBN:</td>
              <td>
                <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Ratings:</td>
              <td>
                <input type="text" name="ratings" value={formData.ratings} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input type="text" name="price" value={formData.price} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FormComponent;
