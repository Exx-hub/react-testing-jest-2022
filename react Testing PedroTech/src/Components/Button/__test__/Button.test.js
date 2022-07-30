import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should render button component", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should change button text when clicked", () => {
    render(<Button />);
    // const buttonElement = screen.getByRole("button");
    const buttonElement = screen.getByTitle("dummyButton");
    expect(buttonElement.innerHTML).toBe("Press Here");
    fireEvent.click(buttonElement);
    expect(buttonElement.innerHTML).toBe("You Clicked");
  });
});
