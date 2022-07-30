// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen, waitFor } from "@testing-library/react";
// import App from "./App";

// describe("App component", () => {
//   test("it renders", () => {
//     render(<App />);

//     expect(screen.getByText("USERS:")).toBeInTheDocument();
//   });
// });

// fails because fetching is asynchronous so we need to make testing wait...
// describe("App component", () => {
//   test("it displays a list of users", async () => {
//     render(<App />);

//     expect(screen.getByTestId("user-list")).toBeInTheDocument();
//   });
// });

// describe("App component", () => {
//   test("it displays a list of users", async () => {
//     render(<App />);

//     const userList = await waitFor(() => screen.getByTestId("user-list"));
//     expect(userList).toBeInTheDocument();
//   });
// });

import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    name: "Test User 1",
    username: "testuser1",
  },
  {
    id: 2,
    name: "Test User 2",
    username: "testuser2",
  },
];

describe("App component", () => {
  test("it renders", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<App />);

    expect(screen.getByText("Users:")).toBeInTheDocument();
  });

  test("it displays a list of users", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<App />);

    const userList = await waitFor(() => screen.getByTestId("user-list"));
    expect(userList).toBeInTheDocument();
  });

  test("it displays a row for each user", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<App />);

    const userList = await waitFor(() => screen.findAllByTestId("user-item"));
    expect(userList).toHaveLength(2);
  });
});
