module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '128':'28rem',
      },
      backdropBlur: {
        xs: '1px',
      }
    },
  },
  plugins: [],
}