import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="hover:underline">Home</Link>
        <div>
          <Link to="/characters" className="mx-4 hover:underline">Characters</Link>
          <Link to="/episodes" className="hover:underline">Episodes</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
