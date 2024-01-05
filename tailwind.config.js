/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // bgs
        "primaryBg": "#fff",      // 
        "secondBg": "#e8e8e8",    // light
        "tertiaryBg": "#1e1e1e",  // dark
        "compBg": "#CB473A",      // complementary - analagous

        "darkBg": "#252636",
        "darkBgHover": "#333547",
        "darkBgLight": "#2a2a3c",
        "lightBg": "#ffffff",
        "lightBgDark": "#f5f5f5",
        
        // highlights
        "highlight": "#A6372C",
        "highlightHover": "#b53a2d",
        "highlightOpac": 'rgba(166, 55, 44, .8)',
        "highlightDark": "#4D4D4D",

        // text
        "primaryText": "#000000",
        "secondText": "#4D4D4D",
        "highlightText": "#ffffff",

        // special
        "drawerClearBg": "rgba(0,0,0,.7)",
        "clear": "rgba(0,0,0,0)"
      }
    },
  },
  plugins: [],
}

