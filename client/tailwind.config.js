/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%,49.99%': { opacity: '0', z: '1' },
          '500%,100%': { opacity: '1', z: '5' },
        }
      },
      animation: {
        move: '600ms'
      }
    },
  },
  plugins: [],
}

