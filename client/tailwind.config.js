module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        25: "repeat(25, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
