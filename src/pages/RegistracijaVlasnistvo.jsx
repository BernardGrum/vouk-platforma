// src/pages/RegistracijaVlasnistvo.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { clsx } from 'clsx';

// Ikone ostanejo enake...
const Icons = {
  Ideja: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  RaniRast: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.924 7.625a1.523 1.523 0 00-1.238-1.244l-2.067-.315a1.523 1.523 0 01-1.162-.962L14.45 3.19a1.523 1.523 0 00-2.9 0l-1.033 1.913a1.523 1.523 0 01-1.162.962l-2.067.315a1.523 1.523 0 00-1.238 1.244l-.315 2.067a1.523 1.523 0 01-.962 1.162l-1.913 1.033a1.523 1.523 0 000 2.9l1.913 1.033a1.523 1.523 0 01.962 1.162l.315 2.067a1.523 1.523 0 001.238 1.244l2.067.315a1.523 1.523 0 011.162.962l1.033 1.913a1.523 1.523 0 002.9 0l1.033-1.913a1.523 1.523 0 011.162-.962l2.067-.315a1.523 1.523 0 001.238-1.244l.315-2.067a1.523 1.523 0 01.962-1.162l1.913-1.033a1.523 1.523 0 000-2.9l-1.913-1.033a1.523 1.523 0 01-.962-1.162l-.315-2.067z" /></svg>,
  Rast: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  Zrelo: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
};

const fazeUlaganja = [
  { naziv: "Ideja (Seed)", ikona: <Icons.Ideja /> },
  { naziv: "Rani rast (Early-stage)", ikona: <Icons.RaniRast /> },
  { naziv: "Rast (Growth-stage)", ikona: <Icons.Rast /> },
  { naziv: "Zrelo poduzeće (Scale-up)", ikona: <Icons.Zrelo /> },
];
const industrije = ["SaaS", "Fintech", "Zdravstvo", "Održiva energija", "Logistika", "AI"];
const smartMoneyOpcije = ["Mentorstvo", "Strateško savjetovanje", "Pristup mreži kontakata", "Pomoć pri izlasku na strana tržišta"];

function RegistracijaVlasnistvo() {
  const navigate = useNavigate();
  const [odabraneFaze, setOdabraneFaze] = useState([]);
  const [odabraneIndustrije, setOdabraneIndustrije] = useState([]);
  const [iznosInvesticije, setIznosInvesticije] = useState(250000);
  const [formaJeValidna, setFormaJeValidna] = useState(false);

  useEffect(() => {
    if (odabraneFaze.length > 0 && odabraneIndustrije.length > 0) {
      setFormaJeValidna(true);
    } else {
      setFormaJeValidna(false);
    }
  }, [odabraneFaze, odabraneIndustrije]);

  const handleMultiSelect = (setter, trenutniOdabir, vrijednost) => {
    if (trenutniOdabir.includes(vrijednost)) {
      setter(trenutniOdabir.filter(item => item !== vrijednost));
    } else {
      setter([...trenutniOdabir, vrijednost]);
    }
  };

  const handleFinish = () => {
    if (formaJeValidna) {
      navigate('/prilike-za-rast');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4 py-10">
      <div className="w-full max-w-2xl mb-4">
        <p className="text-sm text-neutral-600 text-center">Korak 3 od 3 (Vlasničko ulaganje)</p>
        <div className="w-full bg-neutral-200 rounded-full h-2"><div className="bg-primary-600 h-2 rounded-full w-full"></div></div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg border-neutral-200 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-8">Kakve prilike za rast tražite?</h2>
        <div className="space-y-10">
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">U kojoj fazi razvoja najradije ulažete?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fazeUlaganja.map(faza => {
                const isSelected = odabraneFaze.includes(faza.naziv);
                return (
                  <button 
                    key={faza.naziv}
                    onClick={() => handleMultiSelect(setOdabraneFaze, odabraneFaze, faza.naziv)}
                    // POPRAVEK: Uporabljamo clsx za dinamično dodajanje razredov
                    className={clsx(
                      "flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-200 font-semibold text-center",
                      {
                        'bg-blue-100 border-primary-500 text-primary-600': isSelected,
                        'bg-neutral-100 border-neutral-200 text-neutral-700 hover:border-primary-500': !isSelected,
                      }
                    )}
                  >
                    {faza.ikona}
                    <span>{faza.naziv}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Koja je vaša tipična veličina investicije po poduzeću?</h3>
            <input type="range" min="25000" max="1000000" step="25000" value={iznosInvesticije} onChange={(e) => setIznosInvesticije(e.target.value)} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
            <div className="flex justify-between text-sm text-neutral-600 mt-2">
              <span>25.000 €</span>
              <span className="font-bold text-primary-600">{new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(iznosInvesticije)}</span>
              <span>1.000.000 €+</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Koje industrije po vašem mišljenju imaju najveći potencijal?</h3>
            <div className="flex flex-wrap gap-3">
              {industrije.map(industrija => {
                  const isSelected = odabraneIndustrije.includes(industrija);
                  return (
                    <button 
                        key={industrija}
                        onClick={() => handleMultiSelect(setOdabraneIndustrije, odabraneIndustrije, industrija)}
                        className={clsx("px-4 py-2 border-2 rounded-full transition-all duration-200 font-semibold", {
                            'bg-blue-100 border-primary-500 text-primary-600': isSelected,
                            'bg-white border-neutral-300 text-neutral-700 hover:border-primary-500': !isSelected
                        })}
                    >
                        {industrija}
                    </button>
                  )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Što osim kapitala donosite u poduzeće (smart money)?</h3>
            <div className="space-y-2">
              {smartMoneyOpcije.map(opcija => (
                <label key={opcija} className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer border border-transparent has-[:checked]:bg-primary-50 has-[:checked]:border-primary-500 transition-all">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-3 text-neutral-700 font-medium">{opcija}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-neutral-200">
            <Button onClick={handleFinish} variant="primary" className="w-full" disabled={!formaJeValidna}>
              Pokaži mi prilike
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistracijaVlasnistvo;