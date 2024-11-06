import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { MenuItem } from "./MenuItem";

test("MenuItem renders a link in a list item", () => {
  render(<MenuItem href="/blog" label="Blog" />);

  const listItem = screen.getByRole("listitem");
  const link = getByRole(listItem, "link");
  expect(link).toHaveAttribute("href", "/blog");
  expect(link).toHaveAttribute("title", "Blog");
  expect(link).toHaveTextContent("Blog");
});
