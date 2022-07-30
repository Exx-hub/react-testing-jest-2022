import { render, screen, fireEvent } from "@testing-library/react";
import DualButton from "../DualButton";

describe("DualButton Component", () => {
  it("should render button", () => {
    render(<DualButton />);
    const buttonElement = screen.getByTestId("myButton");
    const buttonElements = screen.getAllByTestId("myButton");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeTruthy();

    expect(buttonElements.length).toBe(1);
  });

  it("should render a second button when first button is clicked", () => {
    render(<DualButton />);
    const buttonElement = screen.getByTestId("myButton");
    fireEvent.click(buttonElement);
    const buttonElements = screen.getAllByTestId("myButton");
    expect(buttonElements).toHaveLength(2);
  });
});
