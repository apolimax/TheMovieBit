import { render, screen } from "@testing-library/react";
import CastItem from ".";

const props = {
  adult: false,
  cast_id: 1,
  character: "Peter Parker / Spider-Man",
  credit_id: "5d8e28d38289a0000fcc32f9",
  gender: 2,
  id: 1136406,
  known_for_department: "Acting",
  name: "Tom Holland",
  order: 0,
  original_name: "Tom Holland",
  popularity: 125.602,
  profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
};

describe("<CastItem />", () => {
  it("should render correctly", () => {
    render(<CastItem actor={props} />);

    expect(screen.getByRole("img", { name: props.name })).toBeInTheDocument();
    expect(screen.getByText(props.name)).toHaveStyle("font-weight: 700");
  });
});
