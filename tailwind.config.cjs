/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' for OS preference based
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0d6efd',
          DEFAULT: '#0d6efd',
          dark: '#0d6efd',
        },
        secondary: {
          light: '#6c757d',
          DEFAULT: '#6c757d',
          dark: '#a0a0a0',
        },
        accent: {
          light: '#0d6efd',
          DEFAULT: '#17a2b8',
          dark: '#17a2b8',
        },
        background: {
          light: '#f8f9fa',
          DEFAULT: '#f8f9fa',
          dark: '#121212',
        },
        card: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#1e1e1e',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 15px rgba(0, 0, 0, 0.2)',
        'card-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-dark-hover': '0 8px 15px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}


// tailwind.config.js
// module.exports = {
//   darkMode: 'class', // or 'media'
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#4f46e5',
//         darkBg: '#1e1e1e',
//         lightBg: '#ffffff',
//       },
//     },
//   },
//   plugins: [],
// };
