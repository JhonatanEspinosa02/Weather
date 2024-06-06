/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'autum': "url('/camino-fotorrealista-minimalista.jpg')",
        'bridge': "url('/tokyo-skyline-with-rainbow-bridge-tokyo-tower-tokyo-japan.jpg')",
        'mountain': "url('/painting-mountain-lake-with-mountain-background.jpg')"
      }
    },
  },
  plugins: [],
}

