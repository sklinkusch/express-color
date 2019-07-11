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
- lowdb

## How to use express-color
### Offline usage

#### Setup of the package
1. Clone the repository using ```git clone git@github.com:sklinkusch/express-color.git``` (SSH) or ```git clone https://github.com/sklinkusch/express-color```.
1. Move into the directory ```express-color``` and run ```npm install``` or ```yarn```.
1. Run ```npm run dev``` or ```yarn dev``` in the folder. The server is available on ```https://localhost:3000```.

#### Making requests

Requests can be made in the browser or within JavaScript files using ```XMLHttpRequest```, ```fetch```, or ```axios```.

##### CSS Color Name to RGB values

Input: ```https://localhost:3000/convert/keywordtorgb?color=$COLOR```  
Example: ```https://localhost:3000/convert/keywordtorgb?color=hotpink```  
Your output contains a JSON object with the values for red, green, and blue.  
Output:
 ```
 {
  "red": 255,
  "green": 105,
  "blue": 180
}
```

##### RGB values to HSL values

Input: ```https://localhost:3000/convert/rgbtohsl?color=$RED,$GREEN,$BLUE```  
Example: ```https://localhost:3000/convert/rgbtohsl?color=255,105,180```  
Your output contains a JSON object with the values for hue, saturation, and luminance.  
Output: 
```
{
  "hue": 330,
  "saturation": 100,
  "luminance": 71
}
```

##### RGB value to hexadecimal color code

Input: ```https://localhost:3000/convert/rgbtohex?color=$RED,$GREEN,$BLUE```  
Example: ```https://localhost:3000/convert/rgbtohex?color=255,105,180```  
Your output contains a JSON object with a single hex value.  
Output:  
```
{
  "hex": "FF69B4"
}
```

##### Hexadecimal color code to RGB values

Input: ```https://localhost:3000/convert/hextorgb?color=$HEXCODE```  
Example: ```https://localhost:3000/convert/hextorgb?color=FF69B4```  
Your output contains a JSON object with the values for red, green, and blue.  
Output: 
```
{
  "red": 255,
  "green": 105,
  "blue": 180
}
```