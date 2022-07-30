import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("fetch", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("Username");
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  expect(passwordrInputEl).toBeInTheDocument();
});

test("login button should be rendered", () => {
  render(<Login />);
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

test("login button should not render loading text initially ", () => {
  render(<Login />);
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).not.toHaveTextContent(/please wait/);
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("Username");
  expect(userInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  expect(passwordrInputEl.value).toBe("");
});

test("login button should be disabled if inputs are empty", () => {
  render(<Login />);
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeDisabled();
});

test("error message should be hidden if there are no errors", () => {
  render(<Login />);
  const errorSpan = screen.queryByTitle("error-message");
  expect(errorSpan).toBeFalsy();
});

test("username input should change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("Username");
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  const testValue = "test";

  fireEvent.change(passwordrInputEl, { target: { value: testValue } });
  expect(passwordrInputEl.value).toBe(testValue);
});

test("login button should be enabled if both inputs are not empty", () => {
  render(<Login />);

  const testValue = "test";
  const loginBtn = screen.getByRole("button", { name: "Login" });
  const userInputEl = screen.getByPlaceholderText("Username");
  fireEvent.change(userInputEl, { target: { value: testValue } });
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordrInputEl, { target: { value: testValue } });
  expect(loginBtn).toBeEnabled();
});

test("login button should render loading when clicked ", () => {
  render(<Login />);
  const testValue = "test";
  const loginBtn = screen.getByRole("button", { name: "Login" });
  const userInputEl = screen.getByPlaceholderText("Username");
  fireEvent.change(userInputEl, { target: { value: testValue } });
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordrInputEl, { target: { value: testValue } });
  fireEvent.click(loginBtn);

  expect(loginBtn).toHaveTextContent(/please wait/);
});

test("login button should not render loading after fetching", async () => {
  render(<Login />);
  const testValue = "test";
  const loginBtn = screen.getByRole("button", { name: "Login" });
  const userInputEl = screen.getByPlaceholderText("Username");
  fireEvent.change(userInputEl, { target: { value: testValue } });
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordrInputEl, { target: { value: testValue } });
  fireEvent.click(loginBtn);

  await waitFor(() =>
    expect(loginBtn).not.toHaveTextContent(/please wait.../i)
  );
});

test("login button should not render loading after fetching", async () => {
  render(<Login />);
  const testValue = "test";
  const loginBtn = screen.getByRole("button", { name: "Login" });
  const userInputEl = screen.getByPlaceholderText("Username");
  fireEvent.change(userInputEl, { target: { value: testValue } });
  const passwordrInputEl = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordrInputEl, { target: { value: testValue } });
  fireEvent.click(loginBtn);

  const userElement = await screen.findByText(/Leanne/i);
  expect(userElement).toBeInTheDocument();
});
