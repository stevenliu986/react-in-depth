import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { Items } from "./Items.jsx";

test("Items should call onDelete callback when item is deleted", async () => {
  const items = ["Item A", "Item B", "Item C"];
  const mockDelete = vi.fn();
  render(<Items items={items} onDelete={mockDelete} />);
  const user = userEvent.setup();
  const secondItem = screen.getByRole("button", { name: `Delete 'Item B'` });
  await user.click(secondItem);
  expect(mockDelete).toHaveBeenCalledWith("Item B");
});
