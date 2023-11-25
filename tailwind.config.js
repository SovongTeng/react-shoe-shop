/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        TitleFont: ['Roboto', 'sans-serif'],
        NavlistFont: ['Oswald', 'sans-serif'],
        ShowItemFont: ['Inter', 'sans-serif'],
        ProductFont: ['Noto Sans', 'sans-serif']
      },
      screens: {
        sv: '300px',
        er: '423px',
        df: '492px',
        kl: '508px',
        nm: '760px',
        ui: '850px',
        xc: '280px',
        bn: '424px',
      }
    }
  },
  plugins: [],
}

