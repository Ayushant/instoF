/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Infant"', 'serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'arapey' : ["Arapey", 'serif']
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}

// module.exports = {
//   theme: {
//     rotate: {
//      '-180': '-180deg',
//       '-90': '-90deg',
//      '-45': '-45deg',
//       '0': '0',
//       
//     }
//   }
// }

