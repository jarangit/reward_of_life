module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': ' bounce 15s linear infinite',
      }
    },
    colors: {
      gray: '#151515',
      orange: '#ba7500',
      blue: '#9e4bfbe6',
      back: '#080808',
      mint: '#40ffd7',
    }
  },
  plugins: [],
}