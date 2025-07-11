// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// NOVO: Uvozimo naš RegistrationProvider
import { RegistrationProvider } from './context/RegistrationContext.jsx';

// Glavni layouti
import App from './App.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

// CSS
import './index.css';

// Uvoz vseh strani (ostane nespremenjeno)
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
import PrijavaPoduzetnik from './pages/PrijavaPoduzetnik.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import OdobravanjeProjekata from './pages/admin/OdobravanjeProjekata.jsx';
import UpravljanjeKorisnicima from './pages/admin/UpravljanjeKorisnicima.jsx';
import SigurnosnaPloca from './pages/admin/SigurnosnaPloca.jsx';


// Definicija routerja (ostane nespremenjena)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PocetnaStranica /> },
      // ... vse ostale javne poti
      { path: "/registracija", element: <RegistracijaKorak1 /> },
      { path: "/registracija-korak2", element: <RegistracijaKorak2 /> },
      { path: "/registracija-korak3", element: <RegistracijaKorak3 /> },
      { path: "/registracija-vlasnistvo", element: <RegistracijaVlasnistvo /> },
      { path: "/verifikacija-emaila", element: <VerifikacijaEmaila /> },
      { path: "/prilike", element: <PrilikeDashboard /> },
      { path: "/prilike/:projektId", element: <DetaljiProjekta /> },
      { path: "/prilike-za-rast", element: <PrilikeZaRast /> },
      // Popravek poti za VlasnickiProjectCard
      { path: "/prilike-rast/:projektId", element: <DetaljiVlasnistvo /> }, 
      { path: "/moje-ponude", element: <MojePonude /> },
      { path: "/kreiraj-ponudu", element: <KreirajPonudu /> },
      { path: "/moje-ponude/:ponudaId/prijave", element: <PrijaveNaPonudu /> },
      { path: "/prijava-financiranja", element: <PrijavaFinanciranja1 /> },
      { path: "/uvjeti-brzi-kredit", element: <UvjetiBrziKredit /> },
      { path: "/srz-problema", element: <SrzProblema /> },
      { path: "/zasto-ne-banka", element: <ZastoNeBanka /> },
      { path: "/prijava-poduzetnik", element: <PrijavaPoduzetnik /> },
      { path: "/dokazi-i-zavrsetak", element: <DodavanjeDokaza /> },
      { path: "/prijava-uspjesna", element: <PrijavaUspjesna /> },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        { index: true, element: <AdminDashboard /> },
        { path: "odobravanje", element: <OdobravanjeProjekata /> },
        { path: "korisnici", element: <UpravljanjeKorisnicima /> },
        { path: "sigurnost", element: <SigurnosnaPloca /> },
    ]
  }
]);

// Renderiranje aplikacije
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* NOVO: Ovijemo RouterProvider z našim kontekstom */}
    <RegistrationProvider>
      <RouterProvider router={router} />
    </RegistrationProvider>
  </React.StrictMode>,
);