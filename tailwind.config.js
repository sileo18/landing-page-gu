export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        'primary-mid': '#9165E5',
        'primary-dark': '#2C1060',
        alternative: '#6D3DBB',
        white: '#EFEFEF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
