// src/pages/PrijaveNaPonudu.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProjekti, mockPrijave } from '../data/mockData.js';
import { Link } from 'react-router-dom';

function PrijaveNaPonudu() {
  const { ponudaId } = useParams();
  const navigate = useNavigate();

  // Filtriramo prijave da dobijemo samo one za odabranu ponudu
  const relevantnePrijave = mockPrijave.filter(p => p.ponudaId === parseInt(ponudaId));
  
  // Dohvaćamo ID-jeve projekata iz relevantnih prijava
  const idjeviProjekata = relevantnePrijave.map(p => p.projektId);

  // Dohvaćamo pune detalje projekata na temelju njihovih ID-jeva
  const prijavljeniProjekti = mockProjekti.filter(p => idjeviProjekata.includes(p.id));

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => navigate(-1)} className="text-neutral-500 hover:text-neutral-900 p-2 rounded-full bg-white border border-neutral-200 shadow-sm transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            </button>
            <h1 className="text-4xl font-bold text-neutral-900">Prijave na Ponudu</h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
            {prijavljeniProjekti.length > 0 ? (
              <ul className="divide-y divide-neutral-200">
                {prijavljeniProjekti.map(projekt => (
                  <li key={projekt.id} className="py-4 flex justify-between items-center">
                    <div>
                      <Link to={`/prilike/${projekt.id}`} className="text-lg font-bold text-primary-600 hover:underline">
                        {projekt.naslov}
                      </Link>
                      <p className="text-sm text-neutral-500 mt-1">Industrija: {projekt.industrija}</p>
                    </div>
                    <span className="font-bold text-neutral-800">
                      {new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR' }).format(projekt.iznos)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-neutral-500 py-8">Nema prijava za ovu ponudu.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrijaveNaPonudu;