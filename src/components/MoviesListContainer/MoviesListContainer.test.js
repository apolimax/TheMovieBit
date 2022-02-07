import { render, screen } from "@testing-library/react";
import MoviesLitsContainer from ".";

const props = [
  {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
    popularity: 16564.335,
    poster_path: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    release_date: "2021-12-15",
    title: "Homem-Aranha: Sem Volta Para Casa",
    video: false,
    vote_average: 8.4,
    vote_count: 7209,
  },
  {
    adult: false,
    backdrop_path: "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
    genre_ids: [16, 35, 12, 10751],
    id: 774825,
    original_language: "en",
    original_title: "The Ice Age Adventures of Buck Wild",
    overview:
      "As peripécias hilárias dos mamíferos pré-históricos favoritos de todo mundo continuam, enquanto os gambás caçadores de emoções Crash e Eddie se juntam ao seu amigo caolho, aventureiro e caçador de dinossauros, a doninha Buck Wild, para enfrentar os dinossauros rebeldes do Mundo Perdido.",
    popularity: 5838.981,
    poster_path: "/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg",
    release_date: "2022-01-28",
    title: "A Era do Gelo: As Aventuras de Buck",
    video: false,
    vote_average: 7.4,
    vote_count: 382,
  },
];

jest.mock("../MoviItem", () => {
  // Mocking its internal component
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="MoviesItem mock"></div>;
    },
  };
});

describe("<MoviesListContainer />", () => {
  it("should render correctly", () => {
    render(<MoviesLitsContainer movies={props} />);

    // Movies item should be displayed in a grid form
    expect(screen.getByRole("main")).toHaveStyle("display: grid");
  });
});
