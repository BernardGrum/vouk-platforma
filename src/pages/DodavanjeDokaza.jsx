// src/pages/DodavanjeDokaza.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function DodavanjeDokaza() {
  const navigate = useNavigate();
  const [datoteke, setDatoteke] = useState([]);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    // Dodajemo nove datoteke na postojeću listu
    setDatoteke(prev => [...prev, ...Array.from(event.target.files)]);
  };

  const handleUkloniDatoteku = (index) => {
    setDatoteke(prev => prev.filter((_, i) => i !== index));
  };

  const handleObjavi = () => {
    // U pravoj aplikaciji, ovdje bi se podaci slali na server
    console.log("Objavljujem upit s datotekama:", datoteke);
    navigate('/prijava-uspjesna');
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-200">
        <h2 className="text-3xl font-bold text-center text-neutral-800">Dodajte dokaze (vrlo preporučljivo)</h2>
        <p className="text-center text-neutral-600 mt-2 mb-8">
          Ako imate bilo kakav dokument koji potvrđuje vašu priču, priložite ga. Time ćete značajno povećati povjerenje investitora.
        </p>

        {/* Sučelje za prijenos datoteka */}
        <div 
          className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary-500 hover:bg-neutral-50 transition-colors"
          onClick={() => inputRef.current.click()}
        >
          <input 
            type="file" 
            multiple 
            ref={inputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-neutral-500">Povucite datoteke ovdje ili kliknite za odabir.</p>
          <p className="text-xs text-neutral-400 mt-1">(npr. predračun, ugovor s kupcem, procjena nekretnine...)</p>
        </div>

        {/* Prikaz odabranih datoteka */}
        {datoteke.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-neutral-700">Priložene datoteke:</h3>
            <ul className="mt-2 space-y-2">
              {datoteke.map((file, index) => (
                <li key={index} className="flex justify-between items-center bg-neutral-100 p-2 rounded-md">
                  <span className="text-sm text-neutral-800 truncate">{file.name}</span>
                  <button onClick={() => handleUkloniDatoteku(index)} className="text-red-500 hover:text-red-700 text-sm font-bold">Ukloni</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8">
          <Button onClick={handleObjavi} variant="primary" className="w-full text-lg py-3">
            Objavi upit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DodavanjeDokaza;