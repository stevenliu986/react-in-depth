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

  await user.type(minutes, "5");
  await user.type(seconds, "30");
  expect(minutes).toHaveValue(5);
  expect(seconds).toHaveValue(30);

  await user.click(start);
  const expectValue = 5 * 60 + 30;
  expect(onAdd).toHaveBeenCalledWith(expectValue);
  expect(minutes).toHaveValue(0);
  expect(seconds).toHaveValue(0);
});
