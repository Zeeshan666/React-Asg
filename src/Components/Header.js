// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Frontend  Assessment</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link  to='/' className="hover:text-gray-300">Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
