// src/pages/PrijavaUspjesna.jsx
import React from 'react';
import Button from '../components/Button';

function PrijavaUspjesna() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center text-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">Upit je uspješno poslan!</h1>
        <p className="text-neutral-600 mb-8">
          Vaš je projekt predan na pregled. Naš tim će ga obraditi u najkraćem roku. O statusu ćete biti obaviješteni putem e-pošte.
        </p>
        <Button to="/" variant="primary">
          Vrati se na početnu stranicu
        </Button>
      </div>
    </div>
  );
}

export default PrijavaUspjesna;