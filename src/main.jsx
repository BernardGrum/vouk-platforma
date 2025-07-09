// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Glavni layouti
import App from './App.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

// CSS
import './index.css';

// Uvoz svih stranica za korisnike
import PocetnaStranica from './pages/PocetnaStranica.jsx';
import RegistracijaKorak1 from './pages/RegistracijaKorak1.jsx';
import RegistracijaKorak2 from './pages/RegistracijaKorak2.jsx';
import RegistracijaKorak3 from './pages/RegistracijaKorak3.jsx';
import RegistracijaVlasnistvo from './pages/RegistracijaVlasnistvo.jsx';
import VerifikacijaEmaila from './pages/VerifikacijaEmaila.jsx';
import PrilikeDashboard from './components/PrilikeDashboard.jsx';
import PrilikeZaRast from './pages/PrilikeZaRast.jsx';
import DetaljiProjekta from './pages/DetaljiProjekta.jsx';
import DetaljiVlasnistvo from './pages/DetaljiVlasnistvo.jsx';
import MojePonude from './pages/MojePonude.jsx';
import KreirajPonudu from './pages/KreirajPonudu.jsx';
import PrijaveNaPonudu from './pages/PrijaveNaPonudu.jsx';
import PrijavaFinanciranja1 from './pages/PrijavaFinanciranja1.jsx';
import UvjetiBrziKredit from './pages/UvjetiBrziKredit.jsx';
import SrzProblema from './pages/SrzProblema.jsx';
import ZastoNeBanka from './pages/ZastoNeBanka.jsx';
import DodavanjeDokaza from './pages/DodavanjeDokaza.jsx';
import PrijavaUspjesna from './pages/PrijavaUspjesna.jsx';
import PrijavaPoduzetnik from './pages/PrijavaPoduzetnik.jsx'; // NOVI UVOZ

// Uvoz stranica za admina
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import OdobravanjeProjekata from './pages/admin/OdobravanjeProjekata.jsx'; // NOVI UVOZ
import UpravljanjeKorisnicima from './pages/admin/UpravljanjeKorisnicima.jsx'; // NOVI UVOZ
import SigurnosnaPloca from './pages/admin/SigurnosnaPloca.jsx'; // NOVI UVOZ

// Kreiranje routera sa svim rutama
const router = createBrowserRouter([
  {
    // Rute za javni dio aplikacije (koristi App.jsx kao layout)
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PocetnaStranica /> },
      // Rute za registraciju
      { path: "/registracija", element: <RegistracijaKorak1 /> },
      { path: "/registracija-korak2", element: <RegistracijaKorak2 /> },
      { path: "/registracija-korak3", element: <RegistracijaKorak3 /> }, // Za kreditore
      { path: "/registracija-vlasnistvo", element: <RegistracijaVlasnistvo /> }, // Za vlasnike
      { path: "/verifikacija-emaila", element: <VerifikacijaEmaila /> },
      // Rute za investitore
      { path: "/prilike", element: <PrilikeDashboard /> },
      { path: "/prilike/:projektId", element: <DetaljiProjekta /> },
      { path: "/prilike-za-rast", element: <PrilikeZaRast /> },
      { path: "/prilike-za-rast/:projektId", element: <DetaljiVlasnistvo /> },
      // Rute za upravljanje ponudama
      { path: "/moje-ponude", element: <MojePonude /> },
      { path: "/kreiraj-ponudu", element: <KreirajPonudu /> },
      { path: "/moje-ponude/:ponudaId/prijave", element: <PrijaveNaPonudu /> },
      // Rute za prijavu financiranja
      { path: "/prijava-financiranja", element: <PrijavaFinanciranja1 /> },
      { path: "/uvjeti-brzi-kredit", element: <UvjetiBrziKredit /> },
      { path: "/srz-problema", element: <SrzProblema /> },
      { path: "/zasto-ne-banka", element: <ZastoNeBanka /> },
      { path: "/prijava-poduzetnik", element: <PrijavaPoduzetnik /> }, // NOVA RUTA
      { path: "/dokazi-i-zavrsetak", element: <DodavanjeDokaza /> },
      { path: "/prijava-uspjesna", element: <PrijavaUspjesna /> },
    ]
  },
  {
    // Rute za administratorski dio aplikacije (koristi AdminLayout.jsx)
    path: "/admin",
    element: <AdminLayout />,
    children: [
        { index: true, element: <AdminDashboard /> },
        { path: "odobravanje", element: <OdobravanjeProjekata /> },
        { path: "korisnici", element: <UpravljanjeKorisnicima /> },
        { path: "sigurnost", element: <SigurnosnaPloca /> } // NOVO
        // Ovdje ćemo dodavati ostale admin stranice (npr. /admin/projekti)
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);