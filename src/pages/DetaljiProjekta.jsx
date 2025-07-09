// src/pages/DetaljiProjekta.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProjekti } from '../data/mockData.js';
import Button from '../components/Button.jsx';

function DetaljiProjekta() {
  const { projektId } = useParams();
  const navigate = useNavigate();

  const projekt = mockProjekti.find(p => p.id === parseInt(projektId));

  if (!projekt) {
    return (
      <div className="text-center p-10 text-neutral-700">
        <h1 className="text-2xl font-bold">Projekt nije pronađen.</h1>
        <Button onClick={() => navigate('/prilike')} variant="primary" className="mt-4">
          Vrati se na sve prilike
        </Button>
      </div>
    );
  }

  const sectionTitleStyle = "text-2xl font-bold text-neutral-800";
  const sectionParagraphStyle = "text-neutral-600 leading-relaxed";

  return (
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        
        <div className="px-4 sm:px-0 mb-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            Natrag na sve prilike
          </button>
        </div>

        {/* NOVO: Dva stupca (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* LIJEVI STUPAC (glavni sadržaj) */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 text-center">
                    <p className="text-sm font-semibold text-primary-600 mb-2">PROJEKT</p>
                    <h1 className="text-4xl font-bold text-neutral-900">"{projekt.naslov}"</h1>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
                    <div className="space-y-8 divide-y divide-neutral-200">
                        <div className="pt-8 first:pt-0">
                            <h2 className={sectionTitleStyle}>Naša priča</h2>
                            <p className={`mt-3 ${sectionParagraphStyle}`}>{projekt.punaPrica}</p>
                        </div>
                        <div className="pt-8">
                            <h2 className={sectionTitleStyle}>Tim iza projekta</h2>
                            <p className={`mt-3 ${sectionParagraphStyle}`}>Ovdje bi došao detaljan opis tima...</p>
                        </div>
                        <div className="pt-8">
                            <h2 className={sectionTitleStyle}>Plan i ciljevi</h2>
                            <p className={`mt-3 ${sectionParagraphStyle}`}>Ovdje bi došli detalji o planu...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESNI, "LJEPLJIVI" STUPAC */}
            <aside className="lg:col-span-1 sticky top-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-800 border-b pb-3 mb-4">Pregled ponude</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-neutral-500">Traženi iznos</p>
                            <p className="text-2xl font-bold text-neutral-900">{new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(projekt.iznos)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500">Rok povrata</p>
                            <p className="font-semibold text-neutral-700">{projekt.rok}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500">Ponuđeno osiguranje</p>
                            <p className="font-semibold text-neutral-700">{projekt.osiguranje}</p>
                        </div>
                    </div>
                    <Button variant="primary" className="w-full mt-6">
                        Predloži uvjete financiranja
                    </Button>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}

export default DetaljiProjekta;