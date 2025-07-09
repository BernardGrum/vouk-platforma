// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx'; // Uvezite Header

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header /> {/* Header će se sada prikazivati na vrhu svake stranice */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;