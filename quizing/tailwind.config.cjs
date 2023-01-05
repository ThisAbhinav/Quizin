/** @type {import('tailwindcss').Config} */
module.exports = {
  content:    [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3a5563",
        primaryl:"#4B6F81",
        primaryd:"#2a404b",
        background:"#e7ecef",
        shadow:"#555555",
        correct:"#6AC467",
        incorrect:"#C46767",
        grey:"#7F849F",
        darktext:"#464A5D",
      },
      fontFamily:{
        'title': 'Fredericka the Great, cursive',
        'secondary':'Fira Sans, sans-serif',
      }
    },

  },
  plugins: [],
}
