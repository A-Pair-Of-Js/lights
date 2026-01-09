import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import { Circle } from "./Circle";
import type { LightColor } from "./Circle";

const colorMap: { color: LightColor; rgb: string }[] = [
  { color: "red", rgb: "rgb(255, 0, 0)" },
  { color: "orange", rgb: "rgb(255, 165, 0)" },
  { color: "green", rgb: "rgb(0, 128, 0)" },
];

it("renders the correct background colour for each light colour", () => {
  colorMap.forEach(({ color, rgb }) => {
    const { container } = render(<Circle lightColor={color} />);
    const circle = container.firstChild as HTMLElement;

    expect(circle).toHaveStyle(`background-color: ${rgb}`);
  });
});
