/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "rgb(35, 38, 70)",
      },
      textColor: {
        "custom-green": "rgb(221, 255, 141)",
      },
    },
  },
  plugins: [],
};
