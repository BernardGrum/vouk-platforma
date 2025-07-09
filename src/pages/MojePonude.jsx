// src/pages/MojePonude.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

// Podaci prevedeni na hrvatski
const pocetnePonude = [
  { id: 1, naslov: "Kratkoročni krediti za obrtna sredstva", pregleda: 120, prijava: 5, aktivna: true },
  { id: 2, naslov: "Financiranje IT opreme (5-10k €)", pregleda: 88, prijava: 2, aktivna: true },
  { id: 3, naslov: "Zatvorena ponuda za građevinarstvo", pregleda: 250, prijava: 15, aktivna: false },
];

function MojePonude() {
  const [ponude, setPonude] = useState(pocetnePonude);

  const handleUredi = (id) => {
    alert(`Uređivanje ponude s ID-jem: ${id}`);
  };

  const handleObrisi = (id) => {
    // Prozor za potvrdu na hrvatskom
    if (window.confirm("Jeste li sigurni da želite obrisati ovu ponudu?")) {
      const noviPopis = ponude.filter(p => p.id !== id);
      setPonude(noviPopis);
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
            {/* Tekst preveden na hrvatski */}
            <h1 className="text-4xl font-bold text-neutral-900">Moje investicijske ponude</h1>
            <Button to="/kreiraj-ponudu" variant="primary">
              + Stvori novu ponudu
            </Button>
          </div>
          
          <div className="space-y-5">
            {ponude.map(ponuda => (
              <div key={ponuda.id} className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-800">{ponuda.naslov}</h2>
                    <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500">
                      {/* Tekst preveden na hrvatski */}
                      <span>Pregleda: <strong>{ponuda.pregleda}</strong></span>
                      <span>Prijava: <strong>{ponuda.prijava}</strong></span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${ponuda.aktivna ? 'bg-green-100 text-green-800' : 'bg-neutral-100 text-neutral-800'}`}>
                        {ponuda.aktivna ? 'Aktivna' : 'Neaktivna'}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    <Button variant="secondary" onClick={() => handleUredi(ponuda.id)}>Uredi</Button>
                    {/* Tekst i funkcija ažurirani */}
                    <Button variant="danger" onClick={() => handleObrisi(ponuda.id)}>Obriši</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MojePonude;