// src/pages/PrijavaFinanciranja1.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { clsx } from 'clsx';

const opcijeHitnosti = [
  { id: 'vrlo_hitno', tekst: '⚡️ Vrlo hitno (u 14 dana)' },
  { id: 'hitno', tekst: '🗓️ Hitno (u 1-2 mjeseca)' },
  { id: 'istrazujem', tekst: '👀 Istražujem mogućnosti' },
];

function PrijavaFinanciranja1() {
  const navigate = useNavigate();
  const [iznos, setIznos] = useState(50000);
  const [hitnost, setHitnost] = useState(null);

 // Unutar komponente PrijavaFinanciranja1
const handleNastavi = () => {
    // Provjeravamo uvjete iz specifikacije
    if (iznos <= 50000 && hitnost === 'vrlo_hitno') {
      navigate('/uvjeti-brzi-kredit'); // Ako su uvjeti ispunjeni, idemo na stranicu s uvjetima
    } else {
      navigate('/srz-problema'); // Inače, idemo direktno na sljedeći korak
    }
};

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-200 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Recite nam što trebate.</h1>
        <div className="space-y-10 mt-10">
          
          {/* Pitanje 1: Iznos */}
          <div>
            <label htmlFor="iznos-slider" className="block text-lg font-semibold text-neutral-700 mb-4">
              Koliko sredstava trebate?
            </label>
            <div className="text-4xl font-bold text-primary-600 mb-4">
              {new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(iznos)}
            </div>
            <input
              id="iznos-slider"
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={iznos}
              onChange={(e) => setIznos(e.target.value)}
              className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
          </div>

          {/* Pitanje 2: Hitnost */}
          <div>
            <label className="block text-lg font-semibold text-neutral-700 mb-4">
              Koliko je hitno?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {opcijeHitnosti.map(opcija => (
                <button
                  key={opcija.id}
                  onClick={() => setHitnost(opcija.id)}
                  className={clsx(
                    "p-6 border-2 rounded-lg text-lg font-bold transition-all duration-200 text-center",
                    hitnost === opcija.id
                      ? 'bg-primary-600 border-primary-700 text-white scale-105 shadow-xl'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-800 hover:border-primary-500'
                  )}
                >
                  {opcija.tekst}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button onClick={handleNastavi} variant="primary" className="w-full md:w-auto px-10 py-3" disabled={!hitnost}>
            Nastavi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PrijavaFinanciranja1;