import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter as Router } from "react-router-dom";

const MockFollowerList = () => {
  return (
    <Router>
      <FollowersList />
    </Router>
  );
};

const mockApiRequest = () => {
  return [];
};

// for async element like fetched data, use find for async queries
describe("FollowerList Component", () => {
  it("should render FollowerList component item", async () => {
    render(<MockFollowerList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render mulitple FollowerList component items", async () => {
  //     render(<MockFollowerList />);

  //     const followerDivElements = await screen.findAllByTestId(/follower-item/);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
