// src/pages/PocetnaStranica.jsx
import React from 'react';
import Button from '../components/Button.jsx'; // Uvozimo našu Button komponentu

function PocetnaStranica() {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop';

  return (
    // Dodajemo tamnu prozirnu pozadinu da poboljšamo kontrast teksta
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-4"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
      
      <div className="relative z-10 max-w-4xl">
        {/* Dodajemo sjenu na tekst za bolju čitljivost */}
        <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Investirajte u provjerene projekte. Uz pametne preporuke.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Pridružite se platformi gdje se susreću kapital i poduzetnička prilika. Bez posrednika.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Koristimo našu Button komponentu */}
          <Button to="/registracija" variant="primary" className="w-full sm:w-auto">
            Postani investitor
          </Button>
          {/* Ovdje također možemo koristiti Button komponentu sa sekundarnim stilom */}
          <Button to="/prijava-financiranja" variant="secondary" className="w-full sm:w-auto">
            Tražite financiranje?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PocetnaStranica;