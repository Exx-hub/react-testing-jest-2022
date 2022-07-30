import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe(Counter, () => {
  it("should render count variable", () => {
    render(<Counter />);

    const countVariable = screen.getByTestId("count");
    expect(countVariable).toBeInTheDocument();
  });

  it("should initially have initial count value", () => {
    render(<Counter initialCount={1} />);

    const countVariable = screen.getByTestId("count");
    expect(+countVariable.innerHTML).toBe(1);
  });

  it("should render buttons", () => {
    render(<Counter initialCount={1} />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(4);
  });

  it("should increment count value by 1 when increment button is clicked", () => {
    render(<Counter initialCount={1} />);

    const countVariable = screen.getByTestId("count");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    expect(+countVariable.innerHTML).toEqual (2);
  });

  it("should decrement count value by 1 when decrement button is clicked", () => {
    render(<Counter initialCount={1} />);

    const countVariable = screen.getByTestId("count");
    const decrementBtn = screen.getByText("Decrement");
    fireEvent.click(decrementBtn);
    expect(+countVariable.innerHTML).toBe(0);
  });

  it("should reset count value to zero when reset button is clicked", () => {
    render(<Counter initialCount={1} />);

    const countVariable = screen.getByTestId("count");
    const incrementBtn = screen.getByText("Increment");
    const decrementBtn = screen.getByText("Decrement");
    const restartBtn = screen.getByText("Restart");
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(restartBtn);
    expect(+countVariable.innerHTML).toBe(0);
  });

  it("should switch sign of count value when switch button is clicked", () => {
    render(<Counter initialCount={1} />);

    const countVariable = screen.getByTestId("count");

    const switchBtn = screen.getByText("Switch");

    fireEvent.click(switchBtn);
    expect(+countVariable.innerHTML).toBe(-1);
  });
});
