import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;