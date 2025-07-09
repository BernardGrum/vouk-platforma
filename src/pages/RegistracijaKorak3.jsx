// src/pages/RegistracijaKorak3.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { clsx } from 'clsx'; // Koristimo clsx za lakše slaganje klasa

// Definicija ikona kao React komponenti radi lakšeg korištenja
const Icons = {
  Proizvodnja: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Tehnologija: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Turizam: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Građevinarstvo: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  Hipoteka: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Zadužnica: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
};

// Podaci koje ćemo prikazati, sada s ikonama
const industries = [
  { naziv: "Proizvodnja", ikona: <Icons.Proizvodnja /> },
  { naziv: "IT & Tehnologija", ikona: <Icons.Tehnologija /> },
  { naziv: "Turizam", ikona: <Icons.Turizam /> },
  { naziv: "Građevinarstvo", ikona: <Icons.Građevinarstvo /> },
];

const collaterals = [
    { naziv: "Hipoteka", ikona: <Icons.Hipoteka /> },
    { naziv: "Zadužnica", ikona: <Icons.Zadužnica /> },
];

function RegistracijaKorak3() {
  const navigate = useNavigate();
  
  // NOVO: Stanje za praćenje odabranih stavki
  const [odabraneIndustrije, setOdabraneIndustrije] = useState([]);
  const [odabraniIznos, setOdabraniIznos] = useState(150000);
  const [odabranaOsiguranja, setOdabranaOsiguranja] = useState([]);

  // NOVO: Funkcija za rukovanje odabirom
  const handleOdabir = (kolekcija, setKolekcija, vrijednost) => {
    if (kolekcija.includes(vrijednost)) {
      setKolekcija(kolekcija.filter(item => item !== vrijednost)); // Poništi odabir
    } else {
      setKolekcija([...kolekcija, vrijednost]); // Dodaj u odabir
    }
  };

  const handleFinish = () => {
    navigate('/verifikacija-emaila');
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-4">
        <p className="text-sm text-neutral-600 text-center">Korak 3 od 3</p>
        <div className="w-full bg-neutral-200 rounded-full h-2"><div className="bg-primary-600 h-2 rounded-full" style={{ width: '100%' }}></div></div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg border-neutral-200 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-8">Pomozite nam pronaći prave prilike za vas</h2>
        <div className="space-y-8">
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">U koje industrije najradije ulažete?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map(item => (
                <button 
                  key={item.naziv}
                  onClick={() => handleOdabir(odabraneIndustrije, setOdabraneIndustrije, item.naziv)}
                  className={clsx(
                    "flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-200",
                    odabraneIndustrije.includes(item.naziv) 
                      ? 'bg-primary-500 border-primary-600 text-white' // Stil kada je odabrano
                      : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:border-primary-500' // Stil kada nije odabrano
                  )}
                >
                  {item.ikona}
                  <span className="font-semibold">{item.naziv}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Koji je vaš tipičan iznos ulaganja po projektu?</h3>
            <input type="range" min="10000" max="500000" step="10000" value={odabraniIznos} onChange={(e) => setOdabraniIznos(e.target.value)} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
            <div className="flex justify-between text-sm text-neutral-600 mt-2">
              <span>10.000 €</span>
              <span className="font-bold text-primary-600">{new Intl.NumberFormat('hr-HR').format(odabraniIznos)} €</span>
              <span>500.000 €</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Koja su osiguranja za vas ključna?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {collaterals.map(item => (
                <button 
                  key={item.naziv}
                  onClick={() => handleOdabir(odabranaOsiguranja, setOdabranaOsiguranja, item.naziv)}
                  className={clsx(
                    "flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-200",
                    odabranaOsiguranja.includes(item.naziv) 
                      ? 'bg-primary-500 border-primary-600 text-white'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:border-primary-500'
                  )}
                >
                  {item.ikona}
                  <span className="font-semibold">{item.naziv}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-neutral-200">
            <Button onClick={handleFinish} variant="primary" className="w-full">
              Završi registraciju
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistracijaKorak3;