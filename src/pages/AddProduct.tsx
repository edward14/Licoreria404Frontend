import React, { useState } from 'react';
import axios from 'axios';


const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    stock: 0,
    description: '',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      console.log(formData);
      alert('Product added successfully');
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
    <input type="text" placeholder="Category" onChange={e => setFormData({ ...formData, category: e.target.value })} />
    <input type="number" placeholder="Price" onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })} />
    <input type="number" placeholder="Stock" onChange={e => setFormData({ ...formData, stock: parseInt(e.target.value) })} />
    <textarea placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
    <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, imageUrl: e.target.value })} />
    <button type="submit">Add product</button>
  </form>
);
    
};

export default AddProduct;