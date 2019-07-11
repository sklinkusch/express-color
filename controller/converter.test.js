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