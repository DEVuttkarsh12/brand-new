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
        foreground: '#000000',
        muted: '#6F6F6F',
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
      }
    },
  },
  plugins: [],
}
