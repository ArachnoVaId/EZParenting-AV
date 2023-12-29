/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mitr:['Mitr'],
        inter:['Inter'],
        interBold:['Inter-bold']
      }
    },
  },
  plugins: [],
};
