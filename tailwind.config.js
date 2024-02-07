/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", // <= add this
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}

