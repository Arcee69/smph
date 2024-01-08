/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'hanken': ['Hanken Grotesk'],
        'oleo': ['Oleo Script'],
        'inter': ['Inter'],
        'sans': ['DM Sans'],
        'roboto': ['Roboto Mono'],
        'syncopate': ['Syncopate']
      },
      colors: {
        MODAL_BACKGROUND: "rgba(0, 0, 0, 0.23)",

        BLACK: {
          _100: "#000"
        },
        
        WHITE: {
          _100: "#FFF"
        },

        RED: {
          _100: "#AF202D"
        },

        BROWN: {
          _100: '#C9825D'
        }
        
      }
    },
  },
  plugins: [],
}
