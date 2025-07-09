// src/pages/PrijavaPoduzetnik.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function PrijavaPoduzetnik() {
    const navigate = useNavigate();

    // U pravoj aplikaciji, ovdje bi bila logika za provjeru prijave/registracije
    const handleContinue = () => {
        // Nakon uspješne prijave/registracije, vodimo korisnika na zadnji korak
        navigate('/dokazi-i-zavrsetak');
    };

    return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
                <h2 className="text-3xl font-bold text-center text-neutral-800">Samo još korak do objave.</h2>
                <p className="text-center text-neutral-600 mt-2 mb-8">
                    Kreirajte račun kako biste mogli pratiti status svog upita i primati ponude.
                </p>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">E-pošta</label>
                        <input type="email" id="email" className="block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" placeholder="vas@email.com" />
                    </div>
                    <div>
                        <label htmlFor="lozinka" className="block text-sm font-semibold text-neutral-700 mb-2">Lozinka</label>
                        <input type="password" id="lozinka" className="block w-full border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition" />
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <Button onClick={handleContinue} variant="primary" className="w-full">
                        Registriraj se i nastavi
                    </Button>
                    <Button onClick={handleContinue} variant="secondary" className="w-full">
                        Već imam račun, prijavi se
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PrijavaPoduzetnik;