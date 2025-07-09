// src/pages/SrzProblema.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function SrzProblema() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-200">
        <h2 className="text-3xl font-bold text-center text-neutral-800">Recite nam suštinu. Bez uljepšavanja.</h2>
        <p className="text-center text-neutral-600 mt-2 mb-8">Investitore najviše zanima kako će njihov novac riješiti konkretan problem ili stvoriti konkretnu priliku. U najviše tri rečenice opišite što ćete učiniti s novcem.</p>
        
        <div className="mb-6">
          <textarea 
            rows="5" 
            className="block w-full border border-neutral-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-primary-500 transition" 
            placeholder="Upišite opis..."
            maxLength="500"
          ></textarea>
        </div>

        <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <p className="font-semibold text-neutral-700 text-sm">Primjer:</p>
          <p className="text-neutral-600 text-sm italic mt-1">
            "Hitno moram platiti dobavljaču za materijal u vrijednosti od 30.000 € kako bih mogao dovršiti već dogovorenu narudžbu za kupca X, koja će nam donijeti 80.000 € prihoda."
          </p>
        </div>

        <div className="mt-8">
          <Button onClick={() => navigate('/zasto-ne-banka')} variant="primary" className="w-full">
            Nastavi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SrzProblema;