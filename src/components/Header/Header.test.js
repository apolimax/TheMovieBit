import { render, screen } from "@testing-library/react";
import Header from ".";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<Header />", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toHaveStyle("background-color: #5c16c5");
    expect(screen.getByRole("img", { name: "TMDB logo" })).toBeInTheDocument();
  });
});
