/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "black-1": "var(--black-1)",
      "black-12": "var(--black-12)",
      "black-30": "var(--black-30)",
      "black-50": "var(--black-50)",
      "black-60": "var(--black-60)",
      "black-85": "var(--black-85)",
      "black-90": "var(--black-90)",
      "black-98": "var(--black-98)",
      "black-95": "var(--black-95)",
      "black-100": "var(--black-100)",

      "primary-blue": "var(--primary-blue)",
      "secondary-navbar": "var(--secondary-navbar)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    boxShadow: {
      card: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
    },
  },
  plugins: [],
};
