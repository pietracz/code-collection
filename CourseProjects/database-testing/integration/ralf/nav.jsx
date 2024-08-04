import React from 'react';
import { useAuth } from '../hooks/AuthProvider';


const Navbar = () => {
  const { currentUser, handleLogout } = useAuth();

  return (
    <nav>
      <h1>producte</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/home1">Home1</a></li>
        <li><a href="/smartwatches">Smartwatches</a></li>
        <li><a href="/smartphones">Smartphones</a></li>
        <li><a href="/accessories">Accessories</a></li>
        <li><a href="/product">Product</a></li> 
        <li><a href="/warenkorb">Warenkorb</a></li>
        {currentUser ? (
          <>
            <li><span>Hallo, {currentUser.username}</span></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
