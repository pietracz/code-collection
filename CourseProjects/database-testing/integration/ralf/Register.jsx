import React, { useState } from 'react';
import { useAuth } from '../hooks/AuthProvider';
import '../Register.css';
const Register = () => {
  const { handleRegister, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    street: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shippingAddress = {
      street: formData.street,
      city: formData.city,
      postalCode: formData.postalCode,
      country: formData.country
    };
    try {
      await handleRegister({ ...formData, shippingAddress });
    } catch (error) {
      console.error('Registrierung fehlgeschlagen', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <label>Username:</label>
        <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <label>Street:</label>
        <input type="text" name="street" value={formData.street} onChange={handleChange} required />
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {isAuthenticated && <p className="login-status">Logged in as: {formData.userName}</p>}
    </div>
  );
};

export default Register;





