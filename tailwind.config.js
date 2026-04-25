/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#0a0a0a',
        muted: '#6F6F6F',
        accent: '#1a1a2e',
        'accent-light': '#16213e',
        'accent-blue': '#0f3460',
        'accent-violet': '#533483',
        surface: '#f8f9fa',
        'surface-dark': '#f0f1f3',
        border: '#e5e7eb',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'tight-none': '0.95',
      },
      letterSpacing: {
        'tightest': '-2.46px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
