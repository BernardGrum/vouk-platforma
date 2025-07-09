// app/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // NOVO: Omogućavamo dark mode na temelju postavki OS-a
  darkMode: 'media', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '400': '#3B82F6', // NOVO: Svjetlija plava za tamni način
          '500': '#1E40AF', 
          '600': '#1D4ED8',
          '700': '#1E3A8A',
        },
        'accent': {
          '500': '#059669',
          '600': '#047857',
        },
        'neutral': {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
        }
      }
    },
  },
  plugins: [],
}