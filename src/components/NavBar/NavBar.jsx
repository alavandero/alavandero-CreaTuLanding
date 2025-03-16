import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '/assets/lavandero_logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const categories = ['Carnes', 'Pollo', 'Pescado', 'Mariscos'];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Lavandero Logo" className="logo" />
      </div>
      <ul className="navbar-categories">
        {categories.map((category) => (
          <li key={category} className="navbar-item">
            <Link to={`/category/${category}`} className="navbar-link">{category}</Link> {/* Use Link */}
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;