import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import GameLight from "./GameLight";
import * as audio from "../../audio/tone";

describe("GameLight tests", () => {
  it("cycles through colours over time", () => {
    vi.useFakeTimers();

    render(<GameLight />);

    const circle = screen.getByTestId("game-light");

    expect(circle).toHaveAttribute("aria-label", "green");

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(circle).toHaveAttribute("aria-label", "red");

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(circle).toHaveAttribute("aria-label", "orange");

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(circle).toHaveAttribute("aria-label", "green");

    vi.useRealTimers();
  });

  describe("Audio tones tests", () => {
    it("plays the appropriate tone to match the light colour", () => {
    console.log("tone test to come");

    const spy = vi.spyOn(audio, "playTone");

    expect(spy).toHaveBeenCalledWith(440);
   })
  })
  
  
});
