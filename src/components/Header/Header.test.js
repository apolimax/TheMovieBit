import { render, screen } from "@testing-library/react";
import Header from ".";

describe("<Header />", () => {
  it("render correctly", () => {
    render(<Header />);

    expect(screen.getByLabelText("TMDB logo")).toBeInTheDocument();
  });
});
