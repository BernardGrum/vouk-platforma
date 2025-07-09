// src/data/mockData.js

// Podaci za investitore-kreditore
export const mockProjekti = [
  {
    id: 1,
    naslov: "Nabava novog CNC stroja",
    kratkiOpis: "Povećanje proizvodnog kapaciteta za 40%.",
    punaPrica: "Naša tvrtka se bavi preciznom strojnom obradom metala već 15 godina...",
    iznos: 50000,
    uiOcjena: "B+",
    industrija: "Proizvodnja",
    rok: "24 mjeseca",
    osiguranje: "Zalog na stroj",
    slika: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    naslov: "Širenje na austrijsko tržište",
    kratkiOpis: "Financiranje za marketing i lokalizaciju produkta.",
    punaPrica: "Naš softverski proizvod za upravljanje ljudskim resursima postigao je velik uspjeh na domaćem tržištu...",
    iznos: 30000,
    uiOcjena: "A-",
    industrija: "IT & Tehnologija",
    rok: "18 mjeseci",
    osiguranje: "Zadužnica",
    slika: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    naslov: "Digitalizacija skladišta",
    kratkiOpis: "Implementacija WMS sustava za ubrzanje logistike.",
    punaPrica: "Kao distributeru robe široke potrošnje, brzina i točnost skladišnog poslovanja su nam ključni...",
    iznos: 75000,
    uiOcjena: "B",
    industrija: "Logistika",
    rok: "36 mjeseci",
    osiguranje: "Hipoteka",
    slika: "https://images.pexels.com/photos/3862622/pexels-photo-3862622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Podaci o prijavama projekata na ponude
export const mockPrijave = [
  { prijavaId: 101, ponudaId: 1, projektId: 3 },
  { prijavaId: 102, ponudaId: 1, projektId: 1 },
  { prijavaId: 103, ponudaId: 2, projektId: 2 },
];

// Podaci za investitore-vlasničke ulagatelje
export const mockVlasnickiProjekti = [
  {
    id: 101,
    naslov: "AI Platforma za optimizaciju logistike",
    pitch: "Postati vodeća platforma za upravljanje energijom u regiji.",
    vizija: "Naša vizija je smanjiti troškove i ugljični otisak za logističke tvrtke kroz pametno planiranje ruta.",
    trazenaInvesticija: 150000,
    trazaniUdio: 10,
    potencijalRasta: "10x",
    faza: "Rani rast (Early-stage)",
    preMoneyVrijednost: 1350000,
    tim: [
        { ime: "Ana Anić", uloga: "CEO & Osnivač", slika: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { ime: "Ivan Ivić", uloga: "CTO & Co-founder", slika: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    slika: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 102,
    naslov: "Fintech aplikacija 'Spremi Lako'",
    pitch: "Revolucionizirati način na koji milenijalci štede novac.",
    vizija: "Naša vizija je učiniti štednju i investiranje dostupnim i razumljivim za svakoga, bez obzira na visinu primanja.",
    trazenaInvesticija: 75000,
    trazaniUdio: 15,
    potencijalRasta: "20x",
    faza: "Ideja (Seed)",
    preMoneyVrijednost: 425000,
    tim: [
        { ime: "Petra Petrić", uloga: "CEO & Osnivač", slika: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    slika: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 103,
    naslov: "Platforma za održivu energiju",
    pitch: "Povezujemo proizvođače zelene energije s krajnjim korisnicima.",
    vizija: "Naša vizija je stvoriti 100% transparentno tržište zelene energije i osnažiti male proizvođače.",
    trazenaInvesticija: 500000,
    trazaniUdio: 8,
    potencijalRasta: "5x",
    faza: "Rast (Growth-stage)",
    preMoneyVrijednost: 5750000,
    tim: [
        { ime: "Marko Marić", uloga: "CEO", slika: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { ime: "Jelena Jelić", uloga: "COO", slika: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    slika: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Podaci za admin sučelje (projekti na čekanju)
export const mockProjektiNaCekanju = [
  {
    id: 201,
    naslov: "Proširenje vinarije",
    poduzece: "Vina Burić d.o.o.",
    datumPredaje: "2025-07-08",
    punaPrica: "Planiramo proširiti kapacitet naše vinarije za 50% kako bismo zadovoljili potražnju s novih izvoznih tržišta. Potrebna su nam sredstva za nabavu novih inox bačvi i opreme za punjenje.",
    aiAnaliza: {
      ocjenaRizika: "Nizak (3/10)",
      kljucniFaktori: [
        { status: 'ok', tekst: 'Podaci o poduzeću su uspješno verificirani.' },
        { status: 'ok', tekst: 'Traženi iznos je u skladu s prosjekom za ovu industriju.' },
        { status: 'info', tekst: 'Projekt se oslanja na turističku sezonu.' },
      ]
    }
  },
  {
    id: 202,
    naslov: "Razvoj mobilne aplikacije za tržnice",
    poduzece: "Digitalni Farmer j.d.o.o.",
    datumPredaje: "2025-07-07",
    punaPrica: "Razvijamo mobilnu aplikaciju koja direktno povezuje lokalne OPG-ove s krajnjim kupcima u gradovima, omogućujući narudžbu i dostavu svježih proizvoda.",
    aiAnaliza: {
      ocjenaRizika: "Srednji (6/10)",
      kljucniFaktori: [
        { status: 'ok', tekst: 'Poduzeće je uredno registrirano.' },
        { status: 'info', tekst: 'Velika konkurencija na tržištu dostave.' },
        { status: 'flag', tekst: 'Nedostaje projekcija novčanog toka u priloženim dokumentima.' },
      ]
    }
  }
];

// Podaci za admin sučelje (korisnici)
export const mockKorisnici = [
  {
    id: 301,
    ime: "Ana",
    prezime: "Anić",
    email: "ana.anic@example.com",
    uloga: "Investitor-Vlasnik",
    datumRegistracije: "2025-07-05",
    status: "Aktivan"
  },
  {
    id: 302,
    ime: "Ivan",
    prezime: "Ivić",
    email: "ivan.ivic@example.com",
    uloga: "Investitor-Kreditor",
    datumRegistracije: "2025-07-03",
    status: "Aktivan"
  },
  {
    id: 303,
    ime: "Petra",
    prezime: "Petrić",
    email: "petra.petric@example.com",
    uloga: "Poduzetnik",
    datumRegistracije: "2025-07-01",
    status: "Blokiran"
  },
    {
    id: 304,
    ime: "Marko",
    prezime: "Marić",
    email: "marko.maric@example.com",
    uloga: "Investitor-Kreditor",
    datumRegistracije: "2025-06-28",
    status: "Čeka verifikaciju"
  }
];

// DODAJTE OVAJ NOVI KOD NA DNO DATOTEKE
export const mockUpozorenja = [
  {
    id: 401,
    korisnik: "sumnjivi.korisnik@tempmail.com",
    ocjenaSumnjivosti: "Visoka (9/10)",
    tip: "Moguća prijevara",
    datum: "2025-07-09",
    detalji: {
      razlozi: [
        "Višestruke prijave s različitih IP adresa (HR, DE, NG).",
        "Opis projekta sadrži ključne riječi s crne liste.",
        "Generičke poruke poslane na 20+ projekata u 5 minuta.",
      ]
    }
  },
  {
    id: 402,
    korisnik: "petra.petric@example.com",
    ocjenaSumnjivosti: "Niska (2/10)",
    tip: "Spam ponašanje",
    datum: "2025-07-08",
    detalji: {
      razlozi: [
        "Poslano 5 identičnih ponuda u 1 minuti.",
        "Korisnik je prijavljen s nove, neuobičajene lokacije.",
      ]
    }
  }
];