/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'oswald' : ['Oswald'],
      'opensans' : ['Open Sans']
    },
    colors : {
        'black' : "#000000",
        'white' : '#ffffff',
        'gray' : '#9c9c9c',
        'red' : '#F55050',
    }
  },
  plugins: [],
}