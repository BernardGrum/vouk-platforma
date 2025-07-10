// src/components/Button.jsx
import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

function Button({ children, onClick, to, variant = 'primary', className = '', disabled = false }) {
  // Osnovni stili, ki veljajo za vse gumbe
  const baseClasses = 'inline-flex items-center justify-center px-5 py-2.5 font-semibold text-base rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // POPRAVEK: Eksplicitno definirani stili za vsako stanje posebej
  const styles = {
    primary: {
      // Stil, ko je gumb AKTIVEN (NI onemogočen)
      active: 'bg-primary-600 hover:bg-primary-700 text-blue border-transparent',
      // Stil, ko je gumb NEAKTIVEN (onemogočen)
      disabled: 'bg-neutral-200 text-neutral-400 cursor-not-allowed border-transparent',
    },
    secondary: {
      active: 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100',
      disabled: 'bg-white border-neutral-300 text-neutral-400 cursor-not-allowed opacity-70',
    },
    danger: {
      active: 'bg-red-600 hover:bg-red-700 text-white border-transparent',
      disabled: 'bg-red-200 text-red-400 cursor-not-allowed border-transparent',
    }
  };

  // Združimo razrede glede na to, ali je gumb aktiven ali ne
  const combinedClasses = clsx(
    baseClasses,
    className,
    disabled ? styles[variant].disabled : styles[variant].active
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;