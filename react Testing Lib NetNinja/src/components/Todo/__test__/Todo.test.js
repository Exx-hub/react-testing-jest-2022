import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter as Router } from "react-router-dom";

const MockTodo = () => {
  return (
    <Router>
      <Todo />
    </Router>
  );
};

const addTodos = (todos) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  todos.forEach((e) => {
    fireEvent.change(inputElement, { target: { value: e } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo Component", () => {
  it("should render todo", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toBe("Hello");
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");

    const divElement = screen.getByText(/Hello/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render correct number of tasks added", () => {
    render(<MockTodo />);
    // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // const buttonElement = screen.getByRole("button", { name: /Add/i });
    // fireEvent.change(inputElement, { target: { value: "Hello" } });
    // fireEvent.click(buttonElement);
    // fireEvent.change(inputElement, { target: { value: "Howdy" } });
    // fireEvent.click(buttonElement);
    // fireEvent.change(inputElement, { target: { value: "Anneyong" } });
    // fireEvent.click(buttonElement);
    addTodos(["Hello", "Howdy", "Anneyong"]);

    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not be crossed out when rendered initially", () => {
    render(<MockTodo />);
    addTodos(["hello"]);
    const divElement = screen.getByText(/hello/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should be crossed out when clicked", () => {
    render(<MockTodo />);
    addTodos(["hello"]);
    const divElement = screen.getByText(/hello/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
