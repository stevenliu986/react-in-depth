import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Counter } from "./Counter.jsx";

test("Counter should start at the given value", () => {
  render(<Counter start={10} />);

  const heading = screen.getByRole("heading", { name: "Counter: 10" });
  expect(heading).toBeInTheDocument();
});

test("Counter should start at the default value", () => {
  render(<Counter />);
  const heading = screen.getByRole("heading", { name: "Counter: 0" });
  expect(heading).toBeInTheDocument();
});

test("Counter should increment when clicking the button", async () => {
  render(<Counter />);
  const user = userEvent.setup();
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  await user.click(incrementButton);
  const heading = screen.getByRole("heading", { name: "Counter: 1" });
  expect(heading).toBeInTheDocument();
});
