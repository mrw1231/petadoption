import React from "react";
import { useState } from 'react';
import * as itemAPI from '../../utilities/items-api';

export default function AddPetForm() {
  const [credentials, setCredentials] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newPet = itemAPI.createItem(credentials);
      console.log('new pet', newPet);
      console.log('credentials', credentials);
    } catch {
      setError('Add Pet Failed - Try Again');
    }
  }
  return (
    <div>
      <div>
        <form autoComplete="off" onClick={handleSubmit}>
          <label>Name</label>
          <br></br>
          <input name="name" value={credentials.name} onChange={handleChange} required />
          <br></br>
          <label>Category</label>
          <br></br>
          <input name="category" value={credentials.category} onChange={handleChange} required />
          <br></br>
          <label>Price</label>
          <br></br>
          <input name="price" value={credentials.price} onChange={handleChange} required />
          <br></br>
          <label>Image</label>
          <br></br>
          <input name="image" value={credentials.image} onChange={handleChange} required />
          <br></br>
          <button type="submit">ADD PET</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
