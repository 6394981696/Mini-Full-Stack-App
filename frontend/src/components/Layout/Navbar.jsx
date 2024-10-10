import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
