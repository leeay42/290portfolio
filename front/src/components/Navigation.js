import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/albums">Log Album</Link>
    </nav>
  );
}

export default Navigation;
