// src/pages/VerifikacijaEmaila.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifikacijaEmaila() {
  const navigate = useNavigate();

  useEffect(() => {
    // Postavljamo timer koji će se aktivirati nakon 4 sekunde (4000 milisekundi)
    const timer = setTimeout(() => {
      // OVA PORUKA BI SE TREBALA POJAVITI U KONZOLI (F12)
      console.log("Preusmjeravanje na /prilike...");
      navigate('/prilike');
    }, 4000);

    // "Cleanup" funkcija koja se izvršava ako korisnik napusti stranicu prije isteka timera
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center text-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-lg">
        <div className="text-6xl mb-4">✉️</div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Samo još jedan korak!</h1>
        <p className="text-slate-600 mb-6">
          Na vašu e-mail adresu [email korisnika] poslali smo poveznicu za potvrdu. Molimo, provjerite svoj sandučić i kliknite na poveznicu kako biste aktivirali svoj račun.
        </p>
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            Nakon uspješne verifikacije, bit ćete automatski preusmjereni na nadzornu ploču...
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifikacijaEmaila;