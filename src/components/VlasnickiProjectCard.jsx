// src/components/VlasnickiProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function VlasnickiProjectCard({ projekt }) {
  const { id, slika, naslov, pitch, trazenaInvesticija, trazaniUdio, potencijalRasta } = projekt;

  return (
    <Link to={`/prilike-rast/${id}`} className="block bg-white rounded-xl shadow-lg border border-neutral-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <img src={slika} alt={naslov} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-neutral-800 truncate">{naslov}</h3>
        <p className="text-neutral-600 mt-2 text-sm italic">"{pitch}"</p>
        
        <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between items-center">
          <div>
            <p className="text-xs text-neutral-500">Tražena investicija</p>
            <p className="font-bold text-neutral-900">{new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(trazenaInvesticija)}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 text-right">Za udio</p>
            <p className="font-bold text-neutral-900 text-right">{trazaniUdio}%</p>
          </div>
        </div>
        
        <div className="mt-2 text-center">
            <span className="text-sm font-bold bg-amber-400 text-amber-900 px-3 py-1 rounded-full">
            🔥 Potencijal {potencijalRasta}
            </span>
        </div>
      </div>
    </Link>
  );
}

export default VlasnickiProjectCard;