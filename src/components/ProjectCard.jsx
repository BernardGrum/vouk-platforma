// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Uvezite Link

// Komponenta sada prima cijeli 'projekt' objekt
function ProjectCard({ projekt }) {
  const { id, slika, naslov, kratkiOpis, iznos, uiOcjena } = projekt;

  return (
    // Cijela kartica je sada poveznica koja vodi na dinamičku rutu
    <Link to={`/prilike/${id}`} className="block hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-200 rounded-lg shadow-md flex flex-col">
      <img src={slika} alt={naslov} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-800">{naslov}</h3>
          <p className="text-sm text-slate-600 mt-2">{kratkiOpis}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
          <span className="text-base font-bold text-slate-900">{new Intl.NumberFormat('sl-SI', { style: 'currency', currency: 'EUR' }).format(iznos)}</span>
          <span className="text-sm font-semibold bg-slate-200 text-slate-800 px-2 py-1 rounded-full">{uiOcjena}</span>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;