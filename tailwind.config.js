/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      screens:{
        'xs': '480px',
      },
      animation: {
        typing: 'typing 2s steps(30)',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },


      colors: {
        mybg: '#252b42',
        textbg: '#23A6F0',
        bg1: '#FFDCD1',
        bg2: '#B9EAAB',
        unbg: '#E74040',
        bgw: '#FFFFFF',
      },
      
    },
  },
  plugins: [],
}

