import { render, screen } from "@testing-library/react";
import Button from ".";

const props = {
  id: 12,
  name: "Aventura",
};

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button category={props} />);

    expect(
      screen.getByRole("button", { name: props.name })
    ).toBeInTheDocument();
  });
});
