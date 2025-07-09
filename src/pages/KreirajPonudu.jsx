// src/pages/KreirajPonudu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx'; // Uvozimo našu Button komponentu

function KreirajPonudu() {
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Ponuda spremljena!");
    navigate('/moje-ponude');
  };

  // Definicija stilova za polja radi konzistentnosti
  const inputStyle = "mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200";
  const labelStyle = "block text-sm font-semibold text-neutral-700";

  return (
    <div className="bg-neutral-100 py-10">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8 px-4 sm:px-0">
          <button onClick={() => navigate(-1)} className="text-neutral-500 hover:text-neutral-900 p-2 rounded-full bg-white border border-neutral-200 shadow-sm transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          </button>
          <h1 className="text-4xl font-bold text-neutral-900">Stvori Novu Ponudu</h1>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 space-y-10">
          
          {/* Korak 1 */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-800 mb-1">Korak 1: Opišite svoju ponudu</h2>
            <p className="text-sm text-neutral-500 mb-4">Dajte jasan naslov i opišite kakve projekte želite privući.</p>
            <div className="space-y-4">
              <div>
                <label className={labelStyle}>Naslov ponude</label>
                <input type="text" className={inputStyle} placeholder="npr. Brzi krediti za IT tvrtke" />
              </div>
              <div>
                <label className={labelStyle}>Opis projekata koje tražite</label>
                <textarea rows="3" className={inputStyle}></textarea>
              </div>
            </div>
          </div>

          {/* Korak 2 */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-800 mb-1">Korak 2: Financijski okviri</h2>
            <p className="text-sm text-neutral-500 mb-4">Definirajte raspon ulaganja.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Minimalni iznos (€)</label>
                <input type="number" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Maksimalni iznos (€)</label>
                <input type="number" className={inputStyle} />
              </div>
            </div>
          </div>
          
          {/* Korak 3 */}
          <div>
            <h2 className="text-xl font-bold text-neutral-800 mb-1">Korak 3: Uvjeti i osiguranja</h2>
            <p className="text-sm text-neutral-500 mb-4">Koja su osiguranja za vas prihvatljiva?</p>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> <span className="ml-2 text-neutral-700">Hipoteka</span></label>
              <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> <span className="ml-2 text-neutral-700">Zadužnica</span></label>
              <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> <span className="ml-2 text-neutral-700">Zalog</span></label>
            </div>
          </div>
          
          <div className="pt-6 border-t border-neutral-200 flex justify-end gap-3">
            <Button onClick={() => navigate('/moje-ponude')} variant="secondary">
              Odustani
            </Button>
            <Button onClick={handleSave} variant="primary">
              Spremi ponudu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KreirajPonudu;