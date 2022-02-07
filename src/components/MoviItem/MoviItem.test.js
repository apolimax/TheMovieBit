import { render, screen } from "@testing-library/react";
import MoviesItem from ".";

const props = {
  cover: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
  title: "Homem-Aranha: Sem Volta Para Casa",
  date: "2021-12-15",
  id: 634649,
};

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<MoviesItem />", () => {
  it("should render correctly", () => {
    render(<MoviesItem {...props} />);

    expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();
  });
});
