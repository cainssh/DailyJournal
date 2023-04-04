import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Daily Journal
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/entries/new" className="nav-link">
            Add Entry
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
