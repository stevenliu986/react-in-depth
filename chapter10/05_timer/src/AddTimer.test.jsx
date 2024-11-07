import { AddTimer } from "./AddTimer.jsx";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";

function setup() {
  const onAdd = vi.fn();
  render(<AddTimer onAdd={onAdd} />);
  const minutes = screen.getByRole("spinbutton", { name: "minutes" });
  const seconds = screen.getByRole("spinbutton", { name: "seconds" });
  const start = screen.getByRole("button", { name: "Start" });
  const user = userEvent.setup();
  return { onAdd, minutes, seconds, start, user };
}

test("Counter should start at the given value", async () => {
  const { onAdd, minutes, seconds, start, user } = setup();
  expect(minutes).toHaveValue(0);
  expect(seconds).toHaveValue(0);
});
