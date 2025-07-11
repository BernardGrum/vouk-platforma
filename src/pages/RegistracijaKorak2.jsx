// src/pages/RegistracijaKorak2.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
// NOVO: Uvozimo kavelj za dostop do našega konteksta
import { useRegistration } from '../context/RegistrationContext.jsx';

function RegistracijaKorak2() {
  const navigate = useNavigate();
  // NOVO: Dobimo stanje (state) in funkcijo za posodabljanje (dispatch) iz konteksta
  const { state, dispatch } = useRegistration();

  // Lokalno stanje za sliko lahko zaenkrat ostane, ker je upravljanje z datotekami bolj kompleksno
  const [slika, setSlika] = useState(null);
  const inputRef = useRef(null);
  
  // NOVO: Pomožna funkcija za lažje posodabljanje polj v kontekstu
  const handleFieldChange = (field, value) => {
    dispatch({
        type: 'UPDATE_FIELD',
        field: field,
        payload: value
    });
  };

  const handleSlikaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSlika(URL.createObjectURL(file));
      // Shranimo tudi datoteko v kontekst, če jo bomo kasneje potrebovali
      handleFieldChange('slika', file);
    }
  };
  
  const handleKrugClick = () => {
    inputRef.current.click();
  };

  // NOVO: Funkcija, ki shrani tip ulagatelja in nadaljuje na naslednji korak
  const handleNextStep = (tip) => {
    handleFieldChange('tipUlagatelja', tip);
    if (tip === 'Kreditor') {
        navigate('/registracija-korak3');
    } else {
        navigate('/registracija-vlasnistvo');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mb-4">
        <p className="text-sm text-neutral-600 text-center">Korak 2 od 3</p>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '66%' }}></div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-neutral-800 mb-6">Recite nam više o sebi.</h2>
        <div>
          <div className="flex items-center justify-center mb-6">
            <input type="file" ref={inputRef} onChange={handleSlikaChange} className="hidden" accept="image/png, image/jpeg" />
            <div onClick={handleKrugClick} className="w-32 h-32 rounded-full bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors">
              {slika ? (<img src={slika} alt="Pregled profilne slike" className="w-full h-full object-cover rounded-full" />) : (<span className="text-neutral-500 text-center text-sm">Učitaj sliku</span>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vrednosti so sedaj povezane z globalnim stanjem */}
            <div className="mb-4">
                <label htmlFor="ime" className="block text-sm font-semibold text-neutral-700 mb-2">Ime</label>
                <input type="text" id="ime" value={state.ime} onChange={(e) => handleFieldChange('ime', e.target.value)} className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" />
            </div>
            <div className="mb-4">
                <label htmlFor="prezime" className="block text-sm font-semibold text-neutral-700 mb-2">Prezime</label>
                <input type="text" id="prezime" value={state.prezime} onChange={(e) => handleFieldChange('prezime', e.target.value)} className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="poduzece" className="block text-sm font-semibold text-neutral-700 mb-2">Naziv poduzeća (neobavezno)</label>
            <input type="text" id="poduzece" value={state.poduzece} onChange={(e) => handleFieldChange('poduzece', e.target.value)} className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" />
          </div>
          <div className="mb-4">
            <label htmlFor="telefon" className="block text-sm font-semibold text-neutral-700 mb-2">Telefonski broj</label>
            <input type="tel" id="telefon" value={state.telefon} onChange={(e) => handleFieldChange('telefon', e.target.value)} className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" />
          </div>
          
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <h3 className="text-center font-semibold text-neutral-700 mb-3">Kako želite investirati?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Gumbi sedaj kličejo novo funkcijo 'handleNextStep' */}
                <Button onClick={() => handleNextStep('Kreditor')} variant="secondary" className="w-full">
                    Kao Kreditor
                </Button>
                <Button onClick={() => handleNextStep('Vlasnicki')} variant="secondary" className="w-full">
                    Kao Vlasnički Ulagatelj
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistracijaKorak2;