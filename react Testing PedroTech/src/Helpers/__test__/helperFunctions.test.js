import { render, screen } from "@testing-library/react";
import { multiply, makeLowerCase } from "../helperFunctions";

describe("test helper functions", () => {
  test("multiply two numbers", () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(1000, 0)).toBe(0);
    expect(multiply(-2, 8)).toBe(-16);
    expect(multiply(1.2, 1.4)).toBe(1.68);
  });

  test("convert string into lower case", () => {
    expect(makeLowerCase("ALVIN")).toBe("alvin");
    expect(makeLowerCase("meggy")).toBe("meggy");
    expect(makeLowerCase("Marisse")).toBe("marisse");
  });
});
