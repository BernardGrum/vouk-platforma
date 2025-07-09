// src/pages/admin/SigurnosnaPloca.jsx
import React, { useState } from 'react';
import { mockUpozorenja } from '../../data/mockData.js';
import { clsx } from 'clsx';
import Button from '../../components/Button.jsx';

const StatusIndicator = ({ status }) => {
    const baseClasses = 'w-3 h-3 rounded-full';
    const variantClasses = {
        Visoka: 'bg-red-500',
        Srednja: 'bg-yellow-500',
        Niska: 'bg-green-500',
    };
    const boja = status.includes('Visoka') ? 'Visoka' : (status.includes('Srednja') ? 'Srednja' : 'Niska');
    return <div className={clsx(baseClasses, variantClasses[boja])}></div>;
};

function SigurnosnaPloca() {
  const [upozorenja, setUpozorenja] = useState(mockUpozorenja);
  const [odabranoUpozorenje, setOdabranoUpozorenje] = useState(upozorenja[0] || null);

  const handleOdbaci = (id) => {
    alert(`Upozorenje ${id} je odbačeno (lažno pozitivno).`);
    setUpozorenja(upozorenja.filter(u => u.id !== id));
    setOdabranoUpozorenje(null);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Sigurnosna nadzorna ploča</h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LIJEVI STUPAC: Lista upozorenja */}
        <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-lg border border-neutral-200">
          <h2 className="font-bold text-lg mb-3 px-2">Aktivna upozorenja ({upozorenja.length})</h2>
          <ul className="space-y-2">
            {upozorenja.map(upozorenje => (
              <li key={upozorenje.id} onClick={() => setOdabranoUpozorenje(upozorenje)}
                  className={clsx(
                    "p-3 rounded-lg cursor-pointer transition-colors",
                    odabranoUpozorenje?.id === upozorenje.id ? 'bg-primary-600 text-white' : 'hover:bg-neutral-100'
                  )}
              >
                <div className="flex items-center justify-between">
                    <p className="font-semibold">{upozorenje.korisnik}</p>
                    <StatusIndicator status={upozorenje.ocjenaSumnjivosti} />
                </div>
                <p className={clsx("text-sm", odabranoUpozorenje?.id === upozorenje.id ? 'text-blue-100' : 'text-neutral-500')}>{upozorenje.tip}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* DESNI STUPAC: Detalji upozorenja */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-neutral-200 min-h-[400px]">
          {odabranoUpozorenje ? (
            <div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Detalji upozorenja #{odabranoUpozorenje.id}</h3>
              <div className="bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-700 mb-2">UI Analiza Upozorenja</h4>
                <p className="mb-2"><strong>Ocjena sumnjivosti:</strong> {odabranoUpozorenje.ocjenaSumnjivosti}</p>
                <p className="font-semibold text-neutral-700 mt-3">Razlozi za upozorenje:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 mt-1">
                  {odabranoUpozorenje.detalji.razlozi.map((razlog, index) => (
                    <li key={index}>{razlog}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="secondary" onClick={() => handleOdbaci(odabranoUpozorenje.id)}>Odbaci upozorenje</Button>
                  <Button variant="primary">Suspendiraj račun</Button>
                  <Button variant="danger">Trajno blokiraj</Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-500">
              <p>Odaberite upozorenje s lijeve strane za pregled.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SigurnosnaPloca;