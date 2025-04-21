import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">News Portal</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200 transition-colors'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/world"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200 transition-colors'
                }
              >
                World
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/economy"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200 transition-colors'
                }
              >
                Economy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200 transition-colors'
                }
              >
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200 transition-colors'
                }
              >
                Sports
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;