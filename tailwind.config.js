import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "secondary": "#4a00ff",
        "default": "#f4f4f4",
        "gray-secondary": "#d8d8d8"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

