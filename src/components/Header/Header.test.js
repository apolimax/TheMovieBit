import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/renderWithTheme";
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
  it("render correctly", () => {
    renderWithTheme(<Header />);

    screen.debug();

    // expect(screen.getByRole("img")).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toBeInTheDocument();
    // debug();
  });
});
