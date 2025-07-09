// src/components/Button.jsx
import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

function Button({ children, onClick, to, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-flex items-center justify-center px-5 py-2.5 font-semibold text-base rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800 focus:ring-neutral-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };
  
  const combinedClasses = clsx(baseClasses, variantClasses[variant], className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

export default Button;