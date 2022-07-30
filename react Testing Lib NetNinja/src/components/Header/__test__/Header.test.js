import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it("should be the heading", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" }); // more specific, since there are 2 headers
//   expect(headingElement).toBeInTheDocument();
// });

// it("should be the heading", () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
//   });

// it("test header with correct title", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("aHeader");
//   expect(headingElement).toBeInTheDocument();
// });

// it("test header with test id", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("testIdOne");
//   expect(headingElement).toBeInTheDocument();
// });

// find by

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// QueryBy

// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// getAllBy-- // --- returns an array

// it("should render same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
