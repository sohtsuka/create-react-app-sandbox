module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundColor: {
        'app-header': '#282c34',
      },
      fontFamily: {
        'sans-cra': ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "'Roboto'", "'Oxygen'",
                    "'Ubuntu'", "'Cantarell'", "'Fira Sans'", "'Droid Sans'", "'Helvetica Neue'",
                    "sans-serif"],
        'mono-cra': ["source-code-pro", "Menlo", "Monaco", "Consolas", "'Courier New'",
                    "monospace"],
      },
      fontSize: {
        'app-header': 'calc(10px + 2vmin)',
      },
      height: {
        'app-logo': '40vmin',
      },
      textColor: {
        'app-link': '#61dafb',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
