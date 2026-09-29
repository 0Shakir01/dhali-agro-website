/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agro-dark': '#0d2818',
        'agro-deep': '#13462b',
        'agro-forest': '#13462b',
        'agro-green': '#1b5e3a',
        'agro-light': '#288452',
        'agro-subtle': '#e8f5ed',
        'agro-leaf': '#2e8b57',
        'agro-fresh': '#22c55e',
        'agro-gold': '#d97706',
        'agro-gold-light': '#fef3c7',
        'agro-gold-hover': '#b45309',
        'agro-bg': '#f8faf8',
        'agro-offwhite': '#f8faf8',
        'agro-surface': '#ffffff',
        'agro-charcoal': '#1f2937',
        'agro-muted': '#4b5563',
        'agro-border': '#e5e7eb',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        bn: ['Hind Siliguri', 'sans-serif'],
      },
      boxShadow: {
        'agro': '0 4px 20px rgba(19, 70, 43, 0.08)',
        'agro-lg': '0 10px 30px rgba(19, 70, 43, 0.12)',
        'agro-xl': '0 20px 40px rgba(19, 70, 43, 0.16)',
      }
    },
  },
  plugins: [],
}
