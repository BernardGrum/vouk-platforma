// src/pages/admin/OdobravanjeProjekata.jsx
import React, { useState } from 'react';
import { mockProjektiNaCekanju } from '../../data/mockData.js';
import { clsx } from 'clsx';
import Button from '../../components/Button.jsx';

// Male komponente za prikaz statusa faktora rizika
const StatusIndicator = ({ status }) => {
    const baseClasses = 'w-3 h-3 rounded-full';
    const variantClasses = {
        ok: 'bg-green-500',
        info: 'bg-yellow-500',
        flag: 'bg-red-500',
    };
    return <div className={clsx(baseClasses, variantClasses[status])}></div>;
};

function OdobravanjeProjekata() {
  const [projekti, setProjekti] = useState(mockProjektiNaCekanju);
  const [odabraniProjekt, setOdabraniProjekt] = useState(projekti[0] || null);

  const handleOdobri = (id) => {
    alert(`Projekt ${id} je odobren!`);
    // U pravoj aplikaciji, ovdje bi se uklonio projekt s liste
    setProjekti(projekti.filter(p => p.id !== id));
    setOdabraniProjekt(null);
  };

  const handleOdbij = (id) => {
    const razlog = prompt("Molimo, upišite razlog odbijanja:");
    if (razlog) {
      alert(`Projekt ${id} je odbijen. Razlog: ${razlog}`);
      setProjekti(projekti.filter(p => p.id !== id));
      setOdabraniProjekt(null);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Red za odobravanje projekata</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LIJEVI STUPAC: Lista projekata */}
        <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-lg border border-neutral-200">
          <h2 className="font-bold text-lg mb-3 px-2">Projekti na čekanju ({projekti.length})</h2>
          <ul className="space-y-2">
            {projekti.map(projekt => (
              <li key={projekt.id} onClick={() => setOdabraniProjekt(projekt)}
                  className={clsx(
                    "p-3 rounded-lg cursor-pointer transition-colors",
                    odabraniProjekt?.id === projekt.id ? 'bg-primary-600 text-white' : 'hover:bg-neutral-100'
                  )}
              >
                <p className="font-semibold">{projekt.naslov}</p>
                <p className={clsx("text-sm", odabraniProjekt?.id === projekt.id ? 'text-blue-100' : 'text-neutral-500')}>{projekt.poduzece}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* DESNI STUPAC: Detalji projekta */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-neutral-200 min-h-[600px]">
          {odabraniProjekt ? (
            <div>
              {/* Administratorski panel na vrhu */}
              <div className="bg-neutral-100 p-4 rounded-lg mb-6 border border-neutral-200">
                <h3 className="font-bold text-lg mb-3">Administratorski Panel</h3>
                <div className="bg-white p-4 rounded-md">
                   <h4 className="font-semibold text-neutral-700 mb-2">UI Analiza</h4>
                   <p className="mb-2"><strong>Ocjena rizika:</strong> {odabraniProjekt.aiAnaliza.ocjenaRizika}</p>
                   <ul className="space-y-2 text-sm">
                    {odabraniProjekt.aiAnaliza.kljucniFaktori.map((faktor, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <StatusIndicator status={faktor.status} />
                            <span>{faktor.tekst}</span>
                        </li>
                    ))}
                   </ul>
                </div>
                <div className="mt-4 flex gap-3">
                    <Button variant="primary" onClick={() => handleOdobri(odabraniProjekt.id)}>Odobri projekt</Button>
                    <Button variant="danger" onClick={() => handleOdbij(odabraniProjekt.id)}>Odbij projekt</Button>
                </div>
              </div>

              {/* Detalji projekta */}
              <h2 className="text-2xl font-bold text-neutral-800">{odabraniProjekt.naslov}</h2>
              <p className="text-neutral-600 mt-4 leading-relaxed">{odabraniProjekt.punaPrica}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-500">
              <p>Odaberite projekt s lijeve strane za pregled.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OdobravanjeProjekata;