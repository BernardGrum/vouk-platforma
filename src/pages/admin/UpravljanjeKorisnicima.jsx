// src/pages/admin/UpravljanjeKorisnicima.jsx
import React, { useState, useMemo } from 'react';
import { mockKorisnici } from '../../data/mockData.js';
import Button from '../../components/Button.jsx';

// Komponenta za oznaku statusa
const StatusTag = ({ status }) => {
    const stilovi = {
        'Aktivan': 'bg-green-100 text-green-800',
        'Blokiran': 'bg-red-100 text-red-800',
        'Čeka verifikaciju': 'bg-yellow-100 text-yellow-800',
    };
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${stilovi[status]}`}>{status}</span>;
}

function UpravljanjeKorisnicima() {
  const [korisnici, setKorisnici] = useState(mockKorisnici);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUloga, setFilterUloga] = useState('Svi');

  // useMemo osigurava da se filtriranje ne izvršava nepotrebno pri svakom renderu
  const filtriraniKorisnici = useMemo(() => {
    return korisnici
      .filter(user => { // Filtriranje po ulozi
        if (filterUloga === 'Svi') return true;
        return user.uloga === filterUloga;
      })
      .filter(user => { // Filtriranje po pretrazi
        const pojam = searchTerm.toLowerCase();
        return user.ime.toLowerCase().includes(pojam) ||
               user.prezime.toLowerCase().includes(pojam) ||
               user.email.toLowerCase().includes(pojam);
      });
  }, [korisnici, searchTerm, filterUloga]);

  const uloge = ['Svi', 'Investitor-Kreditor', 'Investitor-Vlasnik', 'Poduzetnik'];

  return (
    <div>
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Upravljanje korisnicima</h1>

      {/* Filteri i pretraga */}
      <div className="mb-6 p-4 bg-white rounded-xl shadow-lg border border-neutral-200 flex flex-col md:flex-row gap-4">
        <input 
          type="text"
          placeholder="Pretraži po imenu, prezimenu, emailu..."
          className="flex-grow border border-neutral-300 rounded-md shadow-sm p-2.5 focus:ring-2 focus:ring-primary-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-600">Uloga:</span>
            {uloge.map(uloga => (
                <button 
                    key={uloga}
                    onClick={() => setFilterUloga(uloga)}
                    className={`px-3 py-1 text-sm rounded-full ${filterUloga === uloga ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}`}
                >
                    {uloga}
                </button>
            ))}
        </div>
      </div>

      {/* Tablica korisnika */}
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="p-4 font-bold text-neutral-800">Ime i Prezime</th>
              <th className="p-4 font-bold text-neutral-800">Email</th>
              <th className="p-4 font-bold text-neutral-800">Uloga</th>
              <th className="p-4 font-bold text-neutral-800">Datum registracije</th>
              <th className="p-4 font-bold text-neutral-800">Status</th>
              <th className="p-4 font-bold text-neutral-800">Akcije</th>
            </tr>
          </thead>
          <tbody>
            {filtriraniKorisnici.map(user => (
              <tr key={user.id} className="border-b border-neutral-200 hover:bg-neutral-50">
                <td className="p-4 font-semibold text-neutral-700">{user.ime} {user.prezime}</td>
                <td className="p-4 text-neutral-600">{user.email}</td>
                <td className="p-4 text-neutral-600">{user.uloga}</td>
                <td className="p-4 text-neutral-600">{user.datumRegistracije}</td>
                <td className="p-4"><StatusTag status={user.status} /></td>
                <td className="p-4">
                  <Button variant="secondary" className="py-1 px-3 text-xs">Uredi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpravljanjeKorisnicima;