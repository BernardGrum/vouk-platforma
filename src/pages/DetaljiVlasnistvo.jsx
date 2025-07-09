// src/pages/DetaljiVlasnistvo.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockVlasnickiProjekti } from '../data/mockData.js';
import Button from '../components/Button.jsx';

function DetaljiVlasnistvo() {
  const { projektId } = useParams();
  const navigate = useNavigate();

  const projekt = mockVlasnickiProjekti.find(p => p.id === parseInt(projektId));

  if (!projekt) {
    return <div className="text-center p-10">Projekt nije pronađen.</div>;
  }
  
  const sectionTitleStyle = "text-2xl font-bold text-neutral-800 mb-4";
  const sectionParagraphStyle = "text-neutral-600 leading-relaxed";

  return (
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        
        <div className="px-4 sm:px-0 mb-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
            &larr; Natrag na sve prilike
          </button>
        </div>

        {/* Glavni Grid s 2 stupca */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* LIJEVI STUPAC */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 text-center">
                <h1 className="text-4xl font-bold text-neutral-900">"{projekt.vizija}"</h1>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
                <h2 className={sectionTitleStyle}>Tim koji će ovo ostvariti</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projekt.tim.map(clan => (
                    <div key={clan.ime} className="text-center">
                      <img src={clan.slika} alt={clan.ime} className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
                      <p className="font-bold text-neutral-800">{clan.ime}</p>
                      <p className="text-sm text-neutral-500">{clan.uloga}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
                <h2 className={sectionTitleStyle}>Tržišna prilika</h2>
                <p className={sectionParagraphStyle}>Ovdje bi došao jasan opis problema, grafički prikaz veličine tržišta (TAM, SAM, SOM) i analiza konkurencije.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
                <h2 className={sectionTitleStyle}>Proizvod i poslovni model</h2>
                <p className={sectionParagraphStyle}>Ovdje bi došao demo video proizvoda, opis načina na koji se zarađuje novac i ključne metrike (traction) poput broja korisnika, MRR, CAC itd.</p>
              </div>
            </div>

            {/* DESNI, "LJEPLJIVI" STUPAC */}
            <aside className="lg:col-span-1 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-800 border-b pb-3 mb-4">Ponuda za partnerstvo</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-neutral-500">Vrednovanje (Pre-money)</p>
                    <p className="text-2xl font-bold text-neutral-900">{new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(projekt.preMoneyVrijednost)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Tražena investicija</p>
                    <p className="text-xl font-semibold text-neutral-800">{new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(projekt.trazenaInvesticija)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Za ponuđeni udio</p>
                    <p className="text-xl font-semibold text-neutral-800">{projekt.trazaniUdio}%</p>
                  </div>
                </div>
                <Button variant="primary" className="w-full mt-6">
                  Izrazi interes za investiciju
                </Button>
              </div>
            </aside>
        </div>
      </div>
    </div>
  );
}

export default DetaljiVlasnistvo;