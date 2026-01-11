import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import { Circle } from "./Circle";
import type { LightColor } from "./Circle";

const colorMap: { color: LightColor; expected: string }[] = [
  {
    color: "red",
    expected: "repeating-linear-gradient(to right, rgb(255,0,0) 0 10px, rgb(200,0,0) 10px 20px)",
  },
  {
    color: "orange",
    expected:
      "repeating-linear-gradient(to bottom, rgb(255,165,0) 0 10px, rgb(255,200,100) 10px 20px)",
  },
  {
    color: "green",
    expected: "rgb(0,128,0)",
  },
];

it("renders the correct background (including shading) for each light color", () => {
  colorMap.forEach(({ color, expected }) => {
    const { container } = render(<Circle lightColor={color} />);
    const circle = container.firstChild as HTMLElement;

    expect(circle).toHaveStyle(`background: ${expected}`);
  });
});
