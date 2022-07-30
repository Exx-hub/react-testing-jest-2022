import { render, screen, fireEvent, act } from "@testing-library/react";
import Input from "../Input";

describe("Input Component", () => {
  test("should render input element", () => {
    const { getByTestId } = render(<Input />);
    const inputElement = getByTestId("searchInput");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  test("should change value when typing", () => {
    render(<Input />);
    const inputElement = screen.getByTestId("searchInput");
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(inputElement.value).toBe("hello");
  });

  test("h2 should not be visible initally", () => {
    render(<Input />);
    const h2Element = screen.getByTestId("searchWord");
    expect(h2Element.innerHTML).toBe("");
  });

  test("h2 should display same value as input when typing", () => {
    render(<Input />);
    const inputElement = screen.getByTestId("searchInput");
    const h2Element = screen.getByTestId("searchWord");
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(h2Element.innerHTML).toBe("hello");
  });

  test("div should only appear if showDiv is true", () => {
    render(<Input showDiv={true} />);

    const divElement = screen.getByTestId("div-toggle");
    expect(divElement).toBeVisible();
    expect(divElement).toBeInTheDocument();
  });

  test("div should not appear if showDiv is false", () => {
    render(<Input showDiv={false} />);

    const divElement = screen.queryByTestId("div-toggle");

    expect(divElement).not.toBeInTheDocument();
  });
});
