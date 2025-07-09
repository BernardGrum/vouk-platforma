// src/pages/UvjetiBrziKredit.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function UvjetiBrziKredit() {
  const navigate = useNavigate();
  const [mozePonuditiOsiguranje, setMozePonuditiOsiguranje] = useState(false);
  const [razumijeUvjete, setRazumijeUvjete] = useState(false);
  const [formaJeValidna, setFormaJeValidna] = useState(false);

  useEffect(() => {
    setFormaJeValidna(mozePonuditiOsiguranje && razumijeUvjete);
  }, [mozePonuditiOsiguranje, razumijeUvjete]);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-200">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-2">Razumijemo da trebate novac brzo.</h2>
        <p className="text-center text-neutral-600 mb-6">Ovo je provjera realnosti.</p>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800">
                Za dobivanje financiranja u tako kratkom roku, jedina opcija je **snažno osiguranje posla**. Investitori će razmatrati samo upite koji uključuju jednu od sljedećih opcija. Molimo, potvrdite da možete ponuditi:
            </p>
        </div>

        <div className="mt-6 space-y-4">
            <label className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer border has-[:checked]:bg-primary-50 has-[:checked]:border-primary-500 transition-all">
                <input type="radio" name="osiguranje" onChange={() => setMozePonuditiOsiguranje(true)} className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                <span className="ml-3 text-neutral-700 font-medium">Mogu ponuditi hipoteku na nekretninu.</span>
            </label>
            <label className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer border has-[:checked]:bg-primary-50 has-[:checked]:border-primary-500 transition-all">
                <input type="radio" name="osiguranje" onChange={() => setMozePonuditiOsiguranje(true)} className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                <span className="ml-3 text-neutral-700 font-medium">Mogu ponuditi zalog pokretnine veće vrijednosti.</span>
            </label>
        </div>

        <div className="mt-6 border-t pt-6">
             <label className="flex items-start">
              <input 
                type="checkbox" 
                className="h-4 w-4 mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                checked={razumijeUvjete}
                onChange={(e) => setRazumijeUvjete(e.target.checked)}
              />
              <span className="ml-2 text-sm text-neutral-600">
                Razumijem da je za brzi kredit potrebno javnobilježnički ovjereno osiguranje.
              </span>
            </label>
        </div>
        
        <div className="mt-8">
            <Button onClick={() => navigate('/srz-problema')} variant="primary" className="w-full" disabled={!formaJeValidna}>
                Nastavi s prijavom
            </Button>
        </div>
      </div>
    </div>
  );
}

export default UvjetiBrziKredit;