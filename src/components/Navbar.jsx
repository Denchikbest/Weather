// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='bar' > 
        <li  className='root' ><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
