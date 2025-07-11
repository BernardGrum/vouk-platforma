// src/context/RegistrationContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// 1. Določimo začetno stanje za naš obrazec
const initialState = {
    email: '',
    password: '',
    ime: '',
    prezime: '',
    poduzece: '',
    telefon: '',
    slika: null,
    tipUlagatelja: '', // 'Kreditor' ali 'Vlasnicki'
    // Preference za Kreditorja
    preferiraneIndustrije: [],
    tipicanIznos: 150000,
    kljucnaOsiguranja: [],
    // Preference za Vlasničkog ulagatelja (dodaj po potrebi)
};

// 2. Ustvarimo Reducer funkcijo za upravljanje s spremembami stanja
function registrationReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.payload,
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

// 3. Ustvarimo Context
const RegistrationContext = createContext();

// 4. Ustvarimo Provider komponento, ki bo "objela" našo aplikacijo
export function RegistrationProvider({ children }) {
    const [state, dispatch] = useReducer(registrationReducer, initialState);

    const value = { state, dispatch };

    return (
        <RegistrationContext.Provider value={value}>
            {children}
        </RegistrationContext.Provider>
    );
}

// 5. Ustvarimo kavelj (hook) po meri za lažji dostop do konteksta
export function useRegistration() {
    const context = useContext(RegistrationContext);
    if (context === undefined) {
        throw new Error('useRegistration must be used within a RegistrationProvider');
    }
    return context;
}