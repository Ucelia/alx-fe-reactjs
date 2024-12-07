/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      const variants = {
        'custom-hover': '&:hover',
        'custom-focus': '&:focus',
      };

      for (const [name, rule] of Object.entries(variants)) {
        addVariant(name, rule);
      }
    },
  ],
};

