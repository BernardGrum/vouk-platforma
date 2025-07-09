// src/pages/RegistracijaVlasnistvo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { clsx } from 'clsx';

const fazeUlaganja = ["Ideja (Seed)", "Rani rast (Early-stage)", "Rast (Growth-stage)", "Zrelo poduzeće (Scale-up)"];
const smartMoneyOpcije = ["Mentorstvo", "Strateško savjetovanje", "Pristup mreži kontakata", "Pomoć pri izlasku na strana tržišta"];

function RegistracijaVlasnistvo() {
  const navigate = useNavigate();
  const [odabraneFaze, setOdabraneFaze] = useState([]);

  const handleOdabir = (vrijednost) => {
    if (odabraneFaze.includes(vrijednost)) {
        setOdabraneFaze(odabraneFaze.filter(item => item !== vrijednost));
    } else {
        setOdabraneFaze([...odabraneFaze, vrijednost]);
    }
  };
  
  const handleFinish = () => {
    // U budućnosti će voditi na prilagođenu nadzornu ploču '/prilike-za-rast'
    navigate('/prilike-za-rast');
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-4">
        <p className="text-sm text-neutral-600 text-center">Korak 3 od 3 (Vlasničko ulaganje)</p>
        <div className="w-full bg-neutral-200 rounded-full h-2"><div className="bg-primary-600 h-2 rounded-full w-full"></div></div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg border-neutral-200 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-8">Kakve prilike za rast tražite?</h2>
        <div className="space-y-8">
          
          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">U kojoj fazi razvoja najradije ulažete? [cite: 210]</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fazeUlaganja.map(faza => (
                <button 
                  key={faza}
                  onClick={() => handleOdabir(faza)}
                  className={clsx(
                    "p-4 border-2 rounded-lg transition-all duration-200 font-semibold text-center",
                    odabraneFaze.includes(faza) 
                      ? 'bg-primary-500 border-primary-600 text-white'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:border-primary-500'
                  )}
                >
                  {faza}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-neutral-700 mb-3">Što osim kapitala donosite u poduzeće (smart money)? [cite: 214]</h3>
            <div className="space-y-2">
                {smartMoneyOpcije.map(opcija => (
                    <label key={opcija} className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer">
                        <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-3 text-neutral-700 font-medium">{opcija}</span>
                    </label>
                ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-neutral-200">
            <Button onClick={handleFinish} variant="primary" className="w-full">
              Pokaži mi prilike
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistracijaVlasnistvo;