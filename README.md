# express-color

This project was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany.

## Features

It uses the [color-convert package](https://github.com/Qix-/color-convert) to perform the following color conversions:
- CSS color name to RGB values
- RGB values to HSL values
- RGB values to hexadecimal color code
- hexadecimal color code to RGB values

Furthermore, there is a statistic about how often a color is converted. This statistic file can also be displayed.

## Techniques
- Node.js
- Express
  - GET requests
  - router
  - middlewares

## How to use express-color
### Offline usage

#### Setup of the package
1. Clone the repository using ```git clone git@github.com:sklinkusch/express-color.git``` (SSH) or ```git clone https://github.com/sklinkusch/express-color```.
1. Move into the directory ```express-color``` and run ```npm install``` or ```yarn```.
1. Run ```npm run dev``` or ```yarn dev``` in the folder. The server is available on ```https://localhost:3000```.