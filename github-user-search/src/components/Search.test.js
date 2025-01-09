import { render, fireEvent, screen } from "@testing-library/react";
import Search from "./Search";

test("renders Search component and submits form", async () => {
  render(<Search />);

  const input = screen.getByPlaceholderText("Enter GitHub username");
  fireEvent.change(input, { target: { value: "testuser" } });

  const button = screen.getByText("Search");
  fireEvent.click(button);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
