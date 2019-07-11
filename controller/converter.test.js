// const { conversion } = require("./converter");
const ColorConverter = require("./converter");

describe("Test keyword to RGB conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("keyword", "rgb", "hotpink")).toEqual({ red: 255, green: 105, blue: 180 });
  });
  test("converts white", () => {
    expect(new ColorConverter("keyword", "rgb", "white")).toEqual({ red: 255, green: 255, blue: 255 });
  });
  test("converts black", () => {
    expect(new ColorConverter("keyword", "rgb", "black")).toEqual({ red: 0, green: 0, blue: 0 });
  });
  test("converts red", () => {
    expect(new ColorConverter("keyword", "rgb", "red")).toEqual({ red: 255, green: 0, blue: 0 });
  });
  test("converts green", () => {
    expect(new ColorConverter("keyword", "rgb", "green")).toEqual({ red: 0, green: 128, blue: 0 });
  });
  test("converts blue", () => {
    expect(new ColorConverter("keyword", "rgb", "blue")).toEqual({ red: 0, green: 0, blue: 255 });
  });
});
describe("Test RGB to HSL conversion", () => {
  test("converts hotpink", () => {
    expect(new ColorConverter("rgb", "hsl", "255,105,180")).toEqual({ hue: 330, saturation: 100, luminance: 71 });
  });
  test("converts white", () => {
    expect(new ColorConverter("rgb", "hsl", "255,255,255")).toEqual({ hue: 0, saturation: 0, luminance: 100 });
  });
  test("converts black", () => {
    expect(new ColorConverter("rgb", "hsl", "0,0,0")).toEqual({ hue: 0, saturation: 0, luminance: 0 });
  });
  test("converts red", () => {
    expect(new ColorConverter("rgb", "hsl", "255,0,0")).toEqual({ hue: 0, saturation: 100, luminance: 50 });
  });
  test("converts green", () => {
    expect(new ColorConverter("rgb", "hsl", "0,128,0")).toEqual({ hue: 120, saturation: 100, luminance: 25 });
  });
  test("converts blue", () => {
    expect(new ColorConverter("rgb", "hsl", "0,0,255")).toEqual({ hue: 240, saturation: 100, luminance: 50 });
  });
});