// src/pages/PrilikeZaRast.jsx
import React from 'react';
import { mockVlasnickiProjekti } from '../data/mockData.js';
import VlasnickiProjectCard from '../components/VlasnickiProjectCard.jsx';

function PrilikeZaRast() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Prilike za Rast</h1>
          <p className="text-lg text-neutral-600 mb-8">Dobrodošli. Vrijeme je za rast.</p>
          
          {/* Ovdje će u budućnosti doći filteri */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockVlasnickiProjekti.map((projekt) => (
              <VlasnickiProjectCard key={projekt.id} projekt={projekt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrilikeZaRast;