// src/pages/ZastoNeBanka.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const razlozi = [
    "Postupci u banci su predugi...",
    "Moje poduzeće trenutno ne zadovoljava uvjete banke...",
    "Već koristim bankovne limite...",
    "Drugo"
];

function ZastoNeBanka() {
    const navigate = useNavigate();
    const [odabraniRazlog, setOdabraniRazlog] = useState('');

    // Ovo je ispravna funkcija koja vodi na sljedeći korak
    const handleNastavi = () => {
        navigate('/prijava-poduzetnik');
    };

    return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-200">
                <h2 className="text-3xl font-bold text-center text-neutral-800">Dodatni kontekst pomaže u izgradnji povjerenja.</h2>
                <p className="text-center text-neutral-600 mt-2 mb-8">
                    Svaka priča ima pozadinu. Zašto za financiranje ne koristite banku?
                </p>

                <div className="space-y-3">
                    {razlozi.map(razlog => (
                        <label 
                            key={razlog} 
                            className={`flex items-start p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer border-2 transition-all ${odabraniRazlog === razlog ? 'border-primary-500 bg-primary-50' : 'border-transparent'}`}
                        >
                            <input 
                                type="radio" 
                                name="razlog"
                                value={razlog}
                                checked={odabraniRazlog === razlog}
                                onChange={(e) => setOdabraniRazlog(e.target.value)}
                                className="h-5 w-5 mt-0.5 text-primary-600 focus:ring-primary-500 border-neutral-300"
                            />
                            <span className="ml-3 text-neutral-700 font-medium">{razlog}</span>
                        </label>
                    ))}
                </div>
                
                {odabraniRazlog === 'Drugo' && (
                    <div className="mt-4">
                        <textarea 
                            rows="3" 
                            className="block w-full border border-neutral-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-primary-500 transition" 
                            placeholder="Molimo, kratko opišite razlog..."
                        ></textarea>
                    </div>
                )}

                <div className="mt-8">
                    <Button onClick={handleNastavi} variant="primary" className="w-full" disabled={!odabraniRazlog}>
                        Nastavi
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ZastoNeBanka;