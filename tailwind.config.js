/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FCDC31",
        orange: "#CC4F08",
        "orange-light": "#D9601B",
        "dark-orange": "#B14507",
        green: "#25D366",
        "grey": "#2D2E32",
        "grey-light": "#E2E2E2",
        "light-yellow": "#FFFBD7",
        "salted-yellow": "#E6DC80",
        "light-black": "#4D4C4B",
        "green-whatsapp": "#25D366",
        "green-whatsapp-dark": "#21B758"
      },

      fontFamily: {
        nunito: "var(--font-nunito)",
        barlow: "var(--font-barlow)",
        openSans: "var(--font-open-sans)",
      },

      container: {
        center: true,
        margin: {
          DEFAULT: '20px', // Default padding
          md: '48px',       // Padding on large screens
          lg: '96px',         // Padding on extra large screens
        },
      },

      screens: {
        'l': '1225px'
      }
    },
    plugins: [
      
    ],
  },
};
