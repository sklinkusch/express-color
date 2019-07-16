# express-color

This project was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany.

## Features

It uses the [color-convert package](https://github.com/Qix-/color-convert) to perform the following color conversions:

- CSS color name &#x27A1; RGB values
- RGB values &#x27A1; HSL values
- RGB values &#x27A1; hexadecimal color code
- hexadecimal color code &#x27A1; RGB values

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

1. Clone the repository using `git clone git@github.com:sklinkusch/express-color.git` (SSH) or `git clone https://github.com/sklinkusch/express-color` (HTTPS).
1. Move into the directory `express-color` and run `npm install` or `yarn`.
1. Run `npm run dev` or `yarn dev` in the folder. The server is available on `https://localhost:3000`.

#### Making requests

Requests can be made in the browser or within JavaScript files using `XMLHttpRequest`, `fetch`, or `axios`.

##### CSS Color Name &#x27A1; RGB values

Input:

```
https://localhost:3000/convert/keywordtorgb?color=$COLOR
```

Example:

```
https://localhost:3000/convert/keywordtorgb?color=hotpink
```

Your output contains a JSON object with the values for red, green, and blue.

Output:

```
{
 "red": 255,
 "green": 105,
 "blue": 180
}
```

##### RGB values &#x27A1; HSL values

Input:

```
https://localhost:3000/convert/rgbtohsl?color=$RED,$GREEN,$BLUE
```

Example:

```
https://localhost:3000/convert/rgbtohsl?color=255,105,180
```

Your output contains a JSON object with the values for hue, saturation, and luminance.

Output:

```
{
  "hue": 330,
  "saturation": 100,
  "luminance": 71
}
```

##### RGB value &#x27A1; hexadecimal color code

Input:

```
https://localhost:3000/convert/rgbtohex?color=$RED,$GREEN,$BLUE
```

Example:

```
https://localhost:3000/convert/rgbtohex?color=255,105,180
```

Your output contains a JSON object with a single hex value.

Output:

```
{
  "hex": "FF69B4"
}
```

##### Hexadecimal color code &#x27A1; RGB values

Input:

```
https://localhost:3000/convert/hextorgb?color=$HEXCODE
```

Example:

```
https://localhost:3000/convert/hextorgb?color=FF69B4
```

Your output contains a JSON object with the values for red, green, and blue.

Output:

```
{
  "red": 255,
  "green": 105,
  "blue": 180
}
```

### Online usage

The API is running online on https://colors.sklinkusch.now.sh and https://express-color.sklinkusch.now.sh.

##### CSS Color Name &#x27A1; RGB values

Input:

```
https://colors.sklinkusch.now.sh/convert/keywordtorgb?color=$COLOR
```

Example:

```
https://colors.sklinkusch.now.sh/convert/keywordtorgb?color=hotpink
```

Your output contains a JSON object with the values for red, green, and blue.

Output:

```
{
 "red": 255,
 "green": 105,
 "blue": 180
}
```

##### RGB values &#x27A1; HSL values

Input:

```
https://colors.sklinkusch.now.sh/convert/rgbtohsl?color=$RED,$GREEN,$BLUE
```

Example:

```
https://colors.sklinkusch.now.sh/convert/rgbtohsl?color=255,105,180
```

Your output contains a JSON object with the values for hue, saturation, and luminance.

Output:

```
{
  "hue": 330,
  "saturation": 100,
  "luminance": 71
}
```

##### RGB value &#x27A1; hexadecimal color code

Input:

```
https://colors.sklinkusch.now.sh/convert/rgbtohex?color=$RED,$GREEN,$BLUE
```

Example:

```
https://colors.sklinkusch.now.sh/convert/rgbtohex?color=255,105,180
```

Your output contains a JSON object with a single hex value.

Output:

```
{
  "hex": "FF69B4"
}
```

##### Hexadecimal color code &#x27A1; RGB values

Input:

```
https://colors.sklinkusch.now.sh/convert/hextorgb?color=$HEXCODE
```

Example:

```
https://colors.sklinkusch.now.sh/convert/hextorgb?color=FF69B4
```

Your output contains a JSON object with the values for red, green, and blue.

Output:

```
{
  "red": 255,
  "green": 105,
  "blue": 180
}
```

## Troubleshooting

In this section, common errors are shown and what is the reason for these errors.

### missing query parameter 'color'

If you see in your browser an output like

```
{
  "error": {
    "message": "missing query parameter 'color'"
  }
}
```

then you have made a query for a color conversion without providing a color. The right syntax is one of these:

```
https://localhost:3000/convert/keywordtorgb?color=yellow
https://localhost:3000/convert/rgbtohsl?color=255,0,0
https://localhost:3000/convert/rgbtohex?color=0,128,0
https://localhost:3000/convert/hextorgb?color=0000ff
```

### \$COLOR is not a valid input for keyword/rgb/hex conversion

If you see an output like

```
{
  "error": {
    "message": "yellow is not a valid input for rgb conversion"
  }
}
```

then the color you provided has not the correct format.
The correct format for

- keyword conversion is one lowercase word without numbers or special characters,
- rgb conversion is consisting of three integers (minimum: 0, maximum: 255) separated by commas,
- hex conversion is consisting of six characters (lowercase or uppercase, all numbers and characters from a to f).

### The color \$COLOR does not exist.

If you see an output, such as

```
{
  "error": {
    "message": "The color hottpink does not exist."
  }
}
```

then the color has the right format, but it is not existing. Possible reasons are:

- a typo in the keyword or
- rgb values that are out of range (lower than 0 or higher than 255)

### The requested conversion of \$COLOR from ... to ... is currently not supported.

If you see an output like

```
{
  "error": {
    "message": "The requested conversion of yellow from keyword to hsl is currently not supported."
  }
}
```

then you asked for a conversion that is not included in this app. Until now, only these conversions are included:

- CSS color name (keyword) &#x27a1; RGB values (rgb)
- RGB values (rgb) &#x27a1; HSL values (hsl)
- RGB values (rgb) &#x27a1; hexadecimal color code (hex)
- hexadecimal color code (hex) &#x27a1; RGB values (rgb)

## Attention

The color conversion is not done with an arbitrary precision. Chained conversions may lead to unexpected results.
