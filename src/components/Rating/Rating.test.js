import { render, screen } from "@testing-library/react";
import Rating from ".";

const rating = 85;

describe("<Rating />", () => {
  it("should render correctly", () => {
    render(<Rating rating={rating} />);

    expect(screen.getByRole("heading")).toHaveTextContent("85%");
  });
});
