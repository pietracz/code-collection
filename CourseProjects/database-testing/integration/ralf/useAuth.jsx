import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthHook = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      navigate('/');
      return user;
    } else {
      throw new Error('Anmeldung fehlgeschlagen');
    }
  };

  const handleRegister = async (formData) => {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const user = await response.json();
      navigate('/');
      return user;
    } else {
      throw new Error('Registrierung fehlgeschlagen');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuthHook;




