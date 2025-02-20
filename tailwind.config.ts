/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f30437",
        secondary: "#0d326f",
        teritiary: "#D9D9D9",
        grey: "#878680",
        light: "#fff8eb",
        brown: "#211902",
        "brown-secondary": "#0e0901",
        "light-bg": "#f8f7f3",
        "grey-100": "#f7f7f7",
        "grey-200": "#e1e1e1",
        "grey-300": "#cfcfcf",
        "grey-400": "#a6a6a6",
        "grey-600": "#6d6d6d",
        "grey-700": "#525252",
        "grey-800": "#3b3b3b",
        "grey-900": "#333333",
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};