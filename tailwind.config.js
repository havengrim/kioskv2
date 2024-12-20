/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primary: {
          light: '#F3E8FF',
          DEFAULT: '#A855F7',
          dark: '#7E22CE'
        },
        secondary: '#64748B'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
