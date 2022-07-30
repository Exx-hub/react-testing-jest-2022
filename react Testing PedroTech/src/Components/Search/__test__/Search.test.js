import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

test("should render input", () => {
  render(<Search />);
  const inputElement = screen.getByTitle("dummySearch");
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type", () => {
  render(<Search />);
  const inputElement = screen.getByTitle("dummySearch");
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "hello" } });
  expect(inputElement.value).toBe("hello");
});
