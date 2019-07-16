const { version } = require("./package.json");

exports.showVersion = () => {
  console.log(version);
}

exports.showHelp = () => {
  console.log(`
  Welcome to color converter API.

  Usage: 
  npm run dev:
    runs a server locally; you can access it using https://localhost:3000/<endpoints>
  node index.js --version
    shows the version of the current API
  node index.js --help
    shows this help text

  Endpoints:
  1. CSS keyword to RGB color values
    https://localhost:3000/convert/keywordtorgb?color=COLOR
    (replace COLOR by the name of the color)
  2.RGB color values to HSL color values
    https://localhost:3000/convert/rgbtohsl?color=RED,GREEN,BLUE
    (replace RED, GREEN, and BLUE by the respective values)
  3. RGB color values to hexadecimal color code
    https://localhost:3000/convert/rgbtohex?color=RED,GREEN,BLUE
    (replace RED, GREEN, and BLUE by the respective value)
  4. hexadecimal color codes to RGB color values
    https://localhost:3000/convert/hextorgb?color=HEXCODE
    (replace HEXCODE by the hexadecimal color code)
  `);
}