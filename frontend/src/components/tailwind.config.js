// tailwind.config.js
module.exports = {
    mode: "jit",
    purge: [
      // ...
      "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // pth to vechaiui
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/core'),

      // ...
    ],
  }
  