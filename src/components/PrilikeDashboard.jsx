// src/components/PrilikeDashboard.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { mockProjekti } from '../data/mockData.js';
import { clsx } from 'clsx';
import PreporukeSection from './PreporukeSection.jsx'; // NOVI UVOZ

function PrilikeDashboard() {
  const [aktivniFilter, setAktivniFilter] = useState('Sve');
  const industrije = ['Sve', ...new Set(mockProjekti.map(p => p.industrija))];
  const filtriraniProjekti = aktivniFilter === 'Sve'
    ? mockProjekti
    : mockProjekti.filter(projekt => projekt.industrija === aktivniFilter);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          
          {/* NOVO: Prikazujemo sekciju s preporukama na vrhu */}
          <PreporukeSection />
          
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Sve Prilike</h2>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {industrije.map(industrija => (
                <button
                  key={industrija}
                  onClick={() => setAktivniFilter(industrija)}
                  className={clsx(
                    "px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200",
                    aktivniFilter === industrija
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
                  )}
                >
                  {industrija}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtriraniProjekti.map((projekt) => (
              <ProjectCard key={projekt.id} projekt={projekt} />
            ))}
          </div>
          
          {filtriraniProjekti.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <p className="text-neutral-600">Nema projekata za odabranu industriju.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrilikeDashboard;