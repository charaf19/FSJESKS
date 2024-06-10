import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl">University Name</h1>
        <nav>
          <Link className="text-white mx-2" to="/">Home</Link>
          <Link className="text-white mx-2" to="/about">About</Link>
          <Link className="text-white mx-2" to="/courses">Courses</Link>
          <Link className="text-white mx-2" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
