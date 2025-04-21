import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">News Portal</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-200 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-colors">World</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-colors">Technology</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-colors">Sports</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
