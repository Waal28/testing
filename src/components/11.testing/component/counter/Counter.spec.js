import { render, screen, act } from "@testing-library/react";
import { Counter } from "./Counter";

describe("src/components/counter/Counter.js", () => {
  describe(`<Counter/>`, () => {
    it("should render correctly", () => {
      render(<Counter />);
      screen.getByTestId("counter");
      const countValue = screen.getByTestId("count-value");
      expect(countValue.innerHTML).toBe("0");
    });
    it("should increment counter by + when increment button clicked", () => {
      render(<Counter />);
      screen.getByTestId("counter");
      const buttonIncrement = screen.getByTestId("button-increment");
      act(() => {});
      buttonIncrement.click();
      const countValue = screen.getByTestId("count-value");
      expect(countValue.innerHTML).toBe("1");
    });
    it("should not increment when increment button clicked more than 10 times", async () => {
      render(<Counter />);
      screen.getByTestId("counter");
      const buttonIncrement = screen.getByTestId("button-increment");
      for (let i = 0; i < 101; i++) {
        act(() => {
          buttonIncrement.click();
        });
      }
      const countValue = screen.getByTestId("count-value");
      expect(countValue.innerHTML).toBe("100");
    });
  });
});
