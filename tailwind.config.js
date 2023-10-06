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
        "custom-cream": "rgb(241, 243, 229)",
      },
      textColor: {
        "custom-green": "rgb(221, 255, 141)",
      },
      screens: {
        "md-sm-nav": "1023px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
