import Button from "../ui/Button";
import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

test("Calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick} label="Send" />);

  const btn = screen.getByText("Send");
  fireEvent.click(btn);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
