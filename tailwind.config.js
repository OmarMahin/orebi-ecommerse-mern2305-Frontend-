/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },

      fontFamily: {
        'DM-sans': "DM Sans",
      },

      colors: {
        'text-light-color': '#767676',
        'text-dark-color': '#262626',
      },

    },
  },
  plugins: [],
}

