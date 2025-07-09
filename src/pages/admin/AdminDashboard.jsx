// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Komponenta za pojedini widget radi čistoće koda
const Widget = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
        <h3 className="text-lg font-bold text-neutral-800 border-b pb-3 mb-4">{title}</h3>
        {children}
    </div>
);

function AdminDashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Administratorska nadzorna ploča</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Widget 1: Čeka na akciju */}
        <Widget title="Čeka na Vašu akciju">
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <Link to="#" className="text-primary-600 hover:underline">Novi projekti za pregled</Link>
              <span className="font-bold text-lg bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center">5</span>
            </li>
            <li className="flex justify-between items-center">
              <Link to="#" className="text-primary-600 hover:underline">Sigurnosna upozorenja</Link>
              <span className="font-bold text-lg bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center">2</span>
            </li>
            <li className="flex justify-between items-center">
              <Link to="#" className="text-primary-600 hover:underline">Novi korisnici za verifikaciju</Link>
              <span className="font-bold text-lg bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">10</span>
            </li>
          </ul>
        </Widget>
        
        {/* Widget 2: Statistika */}
        <Widget title="Statistika platforme (30 dana)">
           <p className="text-center text-neutral-500 p-8">Ovdje bi došli grafikoni (sparklines) s ključnim metrikama.</p>
        </Widget>

        {/* Widget 3: Zadnje aktivnosti */}
        <Widget title="Zadnje aktivnosti korisnika">
          <ul className="space-y-3 text-sm">
            <li className="text-neutral-600">
              <span className="font-semibold text-neutral-800">Ana Anić</span> je registrirala poduzeće 'LogiOpt'.
            </li>
            <li className="text-neutral-600">
              Projekt <span className="font-semibold text-neutral-800">'Nabava CNC stroja'</span> je primio ponudu.
            </li>
             <li className="text-neutral-600">
              Korisnik <span className="font-semibold text-neutral-800">Petra Petrić</span> se prijavila na platformu.
            </li>
          </ul>
        </Widget>

      </div>
    </div>
  );
}

export default AdminDashboard;