import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Items } from "./Items.jsx";

function setup(start) {
  render(<Items start={start} />);
  const heading = screen.getByRole("heading", { name: `Counter: ${start}` });
  const user = userEvent.setup();

  return { heading, user };
}

test("Items should start at the given value", () => {
  const { heading } = setup(10);
  expect(heading).toBeInTheDocument();
});

test("Items should start at the default value", () => {
  const { heading } = setup(0);
  expect(heading).toBeInTheDocument();
});

test("Items should increment when clicking the button", async () => {
  const { user } = setup(0);
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  await user.click(incrementButton);
  const heading = screen.getByRole("heading", { name: "Counter: 1" });
  expect(heading).toBeInTheDocument();
});
