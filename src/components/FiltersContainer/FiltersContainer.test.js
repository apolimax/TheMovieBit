import { render, screen } from "@testing-library/react";
import FiltersContainer from ".";

const props = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
  { id: 35, name: "Comédia" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentário" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Família" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "História" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Mistério" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ficção científica" },
  { id: 10770, name: "Cinema TV" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "Guerra" },
  { id: 37, name: "Faroeste" },
];

jest.mock("../Button", () => {
  // Mocking its internal component
  return {
    __esModule: true,
    default: function Mock() {
      return <button data-testid="Button mock"></button>;
    },
  };
});

describe("<MoviesListContainer />", () => {
  it("should render correctly", () => {
    render(<FiltersContainer genres={props} />);

    expect(
      screen.getByRole("heading", {
        name: "Milhões de filmes, séries e pessoas para descobrir. Explore já.",
      })
    ).toBeInTheDocument();

    // it should render as many buttons as the lenght of the array prop
    expect(screen.getAllByRole("button")).toHaveLength(props.length);
  });
});
