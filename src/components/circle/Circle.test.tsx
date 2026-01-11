import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import { Circle } from "./Circle";
import type { LightColour } from "../../types/lightColour";

const colorMap: { color: LightColour; expected: string }[] = [
  {
    color: "red",
    expected: "repeating-linear-gradient(to right, rgb(255,0,0) 0 8px, rgb(150,0,0) 8px 16px)",
  },
  {
    color: "orange",
    expected: "repeating-linear-gradient(to bottom, rgb(255,140,0) 0 8px, rgb(255,200,0) 8px 16px)"
  },
  {
    color: "green",
    expected: "rgb(0,128,0)",
  },
];

it("renders the correct background (including shading) for each light color", () => {
  colorMap.forEach(({ color, expected }) => {
    const { container } = render(<Circle lightColour={color} />);
    const circle = container.firstChild as HTMLElement;

    console.log(`testing ${color}`);

    expect(circle).toHaveStyle(`background: ${expected}`);
  });
});
