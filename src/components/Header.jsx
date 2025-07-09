// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeClassName = "text-primary-600 border-b-2 border-primary-600";
  const inactiveClassName = "text-neutral-600 hover:text-primary-600";

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-neutral-900">Vouk</NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/prilike" 
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} font-semibold py-5 transition-colors duration-200`}
            >
              Prilike
            </NavLink>
            <NavLink 
              to="/moje-ponude" 
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} font-semibold py-5 transition-colors duration-200`}
            >
              Moje Ponude
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;