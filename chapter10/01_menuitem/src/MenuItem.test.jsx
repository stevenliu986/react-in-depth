import { getByRole, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MenuItem } from "./MenuItem";

test("Menu item renders a link in a list item", () => {
  render(<MenuItem href="/blog" label="Blog" />);

  const listItem = screen.getByRole("listitem");
  const link = getByRole(listItem, "link");
  expect(link).toHaveAttribute("href", "/blog");
  expect(link).toHaveAttribute("label", "Blog");
  expect(link).toHaveTextContent("Blog");
});
