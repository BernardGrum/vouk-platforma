// src/components/PreporukaCard.jsx
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
    <svg className="h-5 w-5 text-accent-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

function PreporukaCard({ preporuka, onOdbaci }) {
  const { id, naslov, bonitetnaOcjena, razloziPreporuke, slika } = preporuka;

  return (
    // Glavni kontejner je već 'flex flex-col', što je ispravno
    <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden snap-center flex flex-col">
      <img src={slika} alt={naslov} className="w-full h-32 object-cover" />
      
      {/* KLJUČNA PROMJENA: Dodajemo 'flex-grow' ovom divu da zauzme sav slobodan prostor */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-neutral-800 pr-2">{naslov}</h3>
                <span className="flex-shrink-0 text-sm font-bold bg-primary-600 text-white px-3 py-1 rounded-full">
                    {bonitetnaOcjena}
                </span>
            </div>
            
            <div className="p-3 bg-neutral-50 rounded-lg">
                <p className="text-sm font-semibold text-neutral-700 mb-2">Zašto vam ovo predlažemo?</p>
                <ul className="space-y-2">
                    {razloziPreporuke.map((razlog, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-sm text-neutral-600">{razlog}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-4 flex gap-3">
          <Button to={`/prilike/${id}`} variant="primary" className="flex-1">
            Pogledaj detaljnije
          </Button>
          <Button variant="secondary" className="flex-1" onClick={() => onOdbaci(id)}>
            Nije za mene
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PreporukaCard;