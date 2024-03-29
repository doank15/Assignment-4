const defaultTheme = import('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
      advanced: ['Nunito']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}