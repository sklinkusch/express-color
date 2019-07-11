// const { conversion } = require("./converter");
const ColorConverter = require("./converter");

describe("Test keyword to RGB conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("keyword", "rgb", "hotpink")).toEqual({
      red: 255,
      green: 105,
      blue: 180
    });
  });
  test("converts white", () => {
    expect(new ColorConverter("keyword", "rgb", "white")).toEqual({
      red: 255,
      green: 255,
      blue: 255
    });
  });
  test("converts black", () => {
    expect(new ColorConverter("keyword", "rgb", "black")).toEqual({
      red: 0,
      green: 0,
      blue: 0
    });
  });
  test("converts red", () => {
    expect(new ColorConverter("keyword", "rgb", "red")).toEqual({
      red: 255,
      green: 0,
      blue: 0
    });
  });
  test("converts green", () => {
    expect(new ColorConverter("keyword", "rgb", "green")).toEqual({
      red: 0,
      green: 128,
      blue: 0
    });
  });
  test("converts blue", () => {
    expect(new ColorConverter("keyword", "rgb", "blue")).toEqual({
      red: 0,
      green: 0,
      blue: 255
    });
  });
});
describe("Test RGB to HSL conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("rgb", "hsl", "255,105,180")).toEqual({
      hue: 330,
      saturation: 100,
      luminance: 71
    });
  });
  test("converts white", () => {
    expect(new ColorConverter("rgb", "hsl", "255,255,255")).toEqual({
      hue: 0,
      saturation: 0,
      luminance: 100
    });
  });
  test("converts black", () => {
    expect(new ColorConverter("rgb", "hsl", "0,0,0")).toEqual({
      hue: 0,
      saturation: 0,
      luminance: 0
    });
  });
  test("converts red", () => {
    expect(new ColorConverter("rgb", "hsl", "255,0,0")).toEqual({
      hue: 0,
      saturation: 100,
      luminance: 50
    });
  });
  test("converts green", () => {
    expect(new ColorConverter("rgb", "hsl", "0,128,0")).toEqual({
      hue: 120,
      saturation: 100,
      luminance: 25
    });
  });
  test("converts blue", () => {
    expect(new ColorConverter("rgb", "hsl", "0,0,255")).toEqual({
      hue: 240,
      saturation: 100,
      luminance: 50
    });
  });
});
describe("Test RGB to Hex conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("rgb", "hex", "255,105,180")).toEqual({
      hex: "FF69B4"
    });
  });
  test("converts white", () => {
    expect(new ColorConverter("rgb", "hex", "255,255,255")).toEqual({
      hex: "FFFFFF"
    });
  });
  test("converts black", () => {
    expect(new ColorConverter("rgb", "hex", "0,0,0")).toEqual({
      hex: "000000"
    });
  });
  test("converts red", () => {
    expect(new ColorConverter("rgb", "hex", "255,0,0")).toEqual({
      hex: "FF0000"
    });
  });
  test("converts green", () => {
    expect(new ColorConverter("rgb", "hex", "0,128,0")).toEqual({
      hex: "008000"
    });
  });
  test("converts blue", () => {
    expect(new ColorConverter("rgb", "hex", "0,0,255")).toEqual({
      hex: "0000FF"
    });
  });
});
describe("Test hex to RGB conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("hex", "rgb", "ff69b4")).toEqual({
      red: 255,
      green: 105,
      blue: 180
    });
  });
  test("converts white", () => {
    expect(new ColorConverter("hex", "rgb", "ffffff")).toEqual({
      red: 255,
      green: 255,
      blue: 255
    });
  });
  test("converts black", () => {
    expect(new ColorConverter("hex", "rgb", "000000")).toEqual({
      red: 0,
      green: 0,
      blue: 0
    });
  });
  test("converts red", () => {
    expect(new ColorConverter("hex", "rgb", "ff0000")).toEqual({
      red: 255,
      green: 0,
      blue: 0
    });
  });
  test("converts green", () => {
    expect(new ColorConverter("hex", "rgb", "008000")).toEqual({
      red: 0,
      green: 128,
      blue: 0
    });
  });
  test("converts blue", () => {
    expect(new ColorConverter("hex", "rgb", "0000ff")).toEqual({
      red: 0,
      green: 0,
      blue: 255
    });
  });
});
describe("combined conversions", () => {
  test("RGB to hex and back", () => {
    expect(new ColorConverter("rgb", "hex", "176,43,194")).toEqual({
      hex: "B02BC2"
    });
    expect(new ColorConverter("hex", "rgb", "B02BC2")).toEqual({
      red: 176,
      green: 43,
      blue: 194
    });
  });
});
describe("insane conversions", () => {
  test("keyword gets a hex string", () => {
    expect(new ColorConverter("keyword", "rgb", "B02BC2")).toEqual({
      error: { message: "B02BC2 is not a valid input for keyword conversion." }
    });
  });
  test("keyword gets rgb values", () => {
    expect(new ColorConverter("keyword", "rgb", "135,149,43")).toEqual({
      error: {
        message: "135,149,43 is not a valid input for keyword conversion."
      }
    });
  });
  test("keyword gets a non-existing color (with a typo)", () => {
    expect(new ColorConverter("keyword", "rgb", "hottping")).toEqual({
      error: { message: "The color hottping does not exist." }
    });
  });
});
