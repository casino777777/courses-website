/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.src/**/*/{html,js}'],
  theme: {
    screens: {
      'lg': {'max':'1199.99px'},
      'md': {'max':'991.99px'},
      'sm': {'max':'767.99px'},
      'xs': {'max':'479.99px'},
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blueviolet: '#5027b5',
        lightgray: '#666768',
      },
    },
  },
  plugins: [],
}

