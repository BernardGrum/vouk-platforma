// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="flex h-screen bg-neutral-100">
      {/* Bočna navigacijska traka */}
      <aside className="w-64 bg-neutral-800 text-white flex flex-col">
        <div className="p-4 border-b border-neutral-700">
          <h1 className="text-2xl font-bold text-center">Vouk Admin</h1>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <NavLink 
            to="/admin" 
            end // 'end' osigurava da je link aktivan samo na točnoj putanji
            className={({ isActive }) => 
              `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-600' : 'hover:bg-neutral-700'}`
            }
          >
            Nadzorna ploča
          </NavLink>
          <NavLink 
            to="/admin/odobravanje" 
            className={({ isActive }) => 
              `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-600' : 'hover:bg-neutral-700'}`
            }
          >
            Odobravanje projekata
          </NavLink>
          <NavLink 
            to="/admin/korisnici" 
            className={({ isActive }) => 
              `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-600' : 'hover:bg-neutral-700'}`
            }
          >
            Upravljanje korisnicima
          </NavLink>
          <NavLink 
            to="/admin/sigurnost" 
            className={({ isActive }) => 
              `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-600' : 'hover:bg-neutral-700'}`
            }
          >
            Sigurnosna ploča
          </NavLink>
        </nav>
      </aside>
      
      {/* Glavni sadržaj stranice */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;