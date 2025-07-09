// src/components/PreporukeSection.jsx
import React, { useState } from 'react'; // NOVO: Uvozimo useState
import PreporukaCard from './PreporukaCard';

const pocetnePreporuke = [
  {
    id: 2,
    naslov: "Širenje na austrijsko tržište",
    bonitetnaOcjena: "A-",
    razloziPreporuke: [
      "Projekt je u 'IT & Tehnologija' industriji (Vaš fokus).",
      "Traženi iznos od 30.000 € je unutar Vašeg raspona.",
    ],
    slika: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 1,
    naslov: "Nabava novog CNC stroja",
    bonitetnaOcjena: "B+",
    razloziPreporuke: [
        "Odgovara Vašem interesu za 'Proizvodnju'.",
        "Poduzeće ima stabilne prihode prema analizi.",
    ],
    slika: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    naslov: "Digitalizacija skladišta",
    bonitetnaOcjena: "B",
    razloziPreporuke: [
        "Nude 'Hipoteku' kao osiguranje (Vaša preferencija).",
        "Visoka UI ocjena za plan i ciljeve projekta.",
    ],
    slika: "https://images.pexels.com/photos/3862622/pexels-photo-3862622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

function PreporukeSection() {
  // NOVO: Pretvaramo statične podatke u 'stanje' koje se može mijenjati
  const [preporuke, setPreporuke] = useState(pocetnePreporuke);

  // NOVO: Funkcija koja uklanja preporuku iz liste
  const handleOdbaciPreporuku = (idZaUklanjanje) => {
    // Filtriramo listu i zadržavamo samo one preporuke čiji ID nije jednak onom koji uklanjamo
    const novePreporuke = preporuke.filter(p => p.id !== idZaUklanjanje);
    setPreporuke(novePreporuke); // Postavljamo novu, kraću listu kao trenutno stanje
  };
  
  // Ako nema više preporuka, ne prikazujemo ništa
  if (preporuke.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-200 mb-8">
      <h2 className="text-2xl font-bold text-neutral-800">Preporuke za vas</h2>
      <p className="text-neutral-600 mt-1 mb-4">Na temelju vaših interesa, odabrali smo {preporuke.length} projekta koja bi vas mogla zanimati.</p>
      
      <div className="flex gap-6 pb-4 -mb-4 overflow-x-auto snap-x snap-mandatory">
        {preporuke.map(preporuka => (
          // NOVO: Prosljeđujemo funkciju za odbacivanje u svaku karticu
          <PreporukaCard 
            key={preporuka.id} 
            preporuka={preporuka} 
            onOdbaci={handleOdbaciPreporuku} 
          />
        ))}
      </div>
    </div>
  );
}

export default PreporukeSection;