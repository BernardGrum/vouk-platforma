// src/pages/RegistracijaKorak1.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
// NOVO: Uvozimo kavelj za dostop do našega konteksta
import { useRegistration } from '../context/RegistrationContext.jsx';

// Ikone (ostanejo nespremenjene)
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.522 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
);
const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2 2 0 012.828 2.828l1.515 1.515a4 4 0 00-5.858-5.858zM10 13a3 3 0 01-3-3l3 3z" clipRule="evenodd" /><path d="M.458 10C1.732 5.943 5.522 3 10 3a9.958 9.958 0 014.512 1.074l1.78-1.781a1 1 0 011.414 1.414l-14 14a1 1 0 01-1.414-1.414l1.473-1.473A10.014 10.014 0 01.458 10z" /></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#0A66C2" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.574l6.19 5.238C42.01 35.846 44 30.134 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);


function RegistracijaKorak1() {
  const navigate = useNavigate();
  // NOVO: Dobimo stanje (state) in funkcijo za posodabljanje (dispatch) iz konteksta
  const { state, dispatch } = useRegistration();

  // Lokalno stanje uporabljamo samo še za stvari, ki so specifične za ta pogled (npr. prikaz gesla)
  const [formaJeValidna, setFormaJeValidna] = useState(false);
  const [prikaziLozinku, setPrikaziLozinku] = useState(false);

  // useEffect se sedaj zanaša na globalno stanje iz konteksta
  useEffect(() => {
    const jeEmailValidan = state.email.includes('@') && state.email.length > 5;
    const jeLozinkaValidna = state.password.length >= 8;
    // Vključimo tudi preverjanje pogojev iz globalnega stanja
    if (jeEmailValidan && jeLozinkaValidna && state.uvjeti) {
      setFormaJeValidna(true);
    } else {
      setFormaJeValidna(false);
    }
  }, [state.email, state.password, state.uvjeti]);

  const handleNextStep = () => {
    if (formaJeValidna) {
      navigate('/registracija-korak2');
    }
  };
  
  // NOVO: Pomožna funkcija za lažje posodabljanje polj v kontekstu
  const handleFieldChange = (field, value) => {
    dispatch({
        type: 'UPDATE_FIELD',
        field: field,
        payload: value
    });
  };

  return (
    <div className="h-screen w-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-neutral-800 mb-8">
          Stvorite svoj investitorski račun
        </h2>
        
        <div className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">E-pošta</label>
                {/* Vrednost sedaj prihaja iz state.email, ob spremembi kličemo handleFieldChange */}
                <input type="email" id="email" className="block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" placeholder="npr. ime.prezime@email.com" value={state.email} onChange={(e) => handleFieldChange('email', e.target.value)} />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-2">Lozinka</label>
                <div className="relative">
                {/* Vrednost sedaj prihaja iz state.password */}
                <input type={prikaziLozinku ? 'text' : 'password'} id="password" className="block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" placeholder="Minimalno 8 znakova" value={state.password} onChange={(e) => handleFieldChange('password', e.target.value)} />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-primary-600" onClick={() => setPrikaziLozinku(!prikaziLozinku)}>
                    {prikaziLozinku ? <EyeOffIcon /> : <EyeIcon />}
                </button>
                </div>
            </div>
            <div>
                <label className="flex items-center">
                {/* Vrednost sedaj prihaja iz state.uvjeti */}
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" checked={state.uvjeti || false} onChange={(e) => handleFieldChange('uvjeti', e.target.checked)} />
                <span className="ml-2 text-sm text-neutral-600">Slažem se s <a href="#" className="underline text-primary-600">Uvjetima korištenja</a> i <a href="#" className="underline text-primary-600">Politikom privatnosti</a>.</span>
                </label>
            </div>
            <Button onClick={handleNextStep} variant="primary" className="w-full" disabled={!formaJeValidna}>
              Registriraj se putem e-pošte
            </Button>
        </div>
        
        <div className="w-full flex items-center my-6">
            <div className="flex-grow border-t border-neutral-300"></div>
            <span className="flex-shrink mx-4 text-neutral-500 text-sm font-semibold">ili</span>
            <div className="flex-grow border-t border-neutral-300"></div>
        </div>
        
        <div className="flex flex-col items-center space-y-3">
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
            <GoogleIcon />
            Registracija putem Googlea
          </Button>
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <LinkedInIcon />
              Registracija putem LinkedIna
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegistracijaKorak1;