import {
  getReleaseDateBR,
  getFormattedReleaseDate,
  getReleaseYear,
  getCertification,
  getDuration,
  getGenres,
} from "./utils";

const movieWithBR = {
  adult: false,
  backdrop_path: "/1zgob2Z8xVE3RZUgOKnHKcVPzOE.jpg",
  belongs_to_collection: null,
  budget: 0,
  credits: { cast: Array(5), crew: Array(28) },
  genres: [
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 14, name: "Fantasia" },
  ],
  homepage:
    "https://www.disneyplus.com/movies/the-simpsons-in-plusaversary/5SbHJwYWYey8&ved=2ahUKEwj3r5X6pL_0AhXWlJUCHdh0Bx4QFnoECAQQAQ&usg=AOvVaw1bZZE6yN6hGjtFtHZZVIqi",
  id: 877183,
  imdb_id: "tt15829632",
  original_language: "en",
  original_title: "The Simpsons in Plusaversary",
  overview:
    "Os Simpsons organizaram uma festa para o Dia do Disney+ e todos foram convidados… menos o Homer. Com amigos do serviço de streaming e músicas dignas de princesas da Disney, o Plusaniversário é o evento do ano em Springfield.",
  popularity: 577.586,
  poster_path: "/954yrReDyxuQZW5W5FoZ3ksZDA6.jpg",
  production_companies: [
    {
      id: 18,
      logo_path: "/uqhagSwM7NAkQWVCQhKTyoqF8XH.png",
      name: "Gracie Films",
      origin_country: "US",
    },
    {
      id: 21659,
      logo_path: "/uJhjhEJEPDoCSSOci44tYoe5BjZ.png",
      name: "20th Television",
      origin_country: "US",
    },
    {
      id: 154887,
      logo_path: null,
      name: "20th Television Animation",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  recommendations: {
    page: 1,
    results: Array(21),
    total_pages: 2,
    total_results: 40,
  },
  release_date: "2021-11-12",
  release_dates: {
    results: [
      {
        iso_3166_1: "US",
        release_dates: [
          {
            certification: "",
            iso_639_1: "",
            note: "Disney+",
            release_date: "2021-11-12T00:00:00.000Z",
            type: 4,
          },
        ],
      },
      {
        iso_3166_1: "BR",
        release_dates: [
          {
            certification: "",
            iso_639_1: "",
            note: "Disney+ & Star+",
            release_date: "2021-11-12T00:00:00.000Z",
            type: 4,
          },
        ],
      },
      {
        iso_3166_1: "AR",
        release_dates: [
          {
            certification: "+10",
            iso_639_1: "",
            note: "Disney+ & Star+",
            release_date: "2021-11-12T00:00:00.000Z",
            type: 4,
          },
        ],
      },
    ],
  },
  revenue: 0,
  runtime: 4,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "",
  title: "Os Simpsons em Plusniversário",
  video: false,
  videos: { results: Array(1) },
  vote_average: 6.6,
  vote_count: 234,
};

const movieWitouthBR = {
  adult: false,
  backdrop_path: "/1zgob2Z8xVE3RZUgOKnHKcVPzOE.jpg",
  belongs_to_collection: null,
  budget: 0,
  credits: { cast: Array(5), crew: Array(28) },
  genres: [
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 14, name: "Fantasia" },
  ],
  homepage:
    "https://www.disneyplus.com/movies/the-simpsons-in-plusaversary/5SbHJwYWYey8&ved=2ahUKEwj3r5X6pL_0AhXWlJUCHdh0Bx4QFnoECAQQAQ&usg=AOvVaw1bZZE6yN6hGjtFtHZZVIqi",
  id: 877183,
  imdb_id: "tt15829632",
  original_language: "en",
  original_title: "The Simpsons in Plusaversary",
  overview:
    "Os Simpsons organizaram uma festa para o Dia do Disney+ e todos foram convidados… menos o Homer. Com amigos do serviço de streaming e músicas dignas de princesas da Disney, o Plusaniversário é o evento do ano em Springfield.",
  popularity: 577.586,
  poster_path: "/954yrReDyxuQZW5W5FoZ3ksZDA6.jpg",
  production_companies: [
    {
      id: 18,
      logo_path: "/uqhagSwM7NAkQWVCQhKTyoqF8XH.png",
      name: "Gracie Films",
      origin_country: "US",
    },
    {
      id: 21659,
      logo_path: "/uJhjhEJEPDoCSSOci44tYoe5BjZ.png",
      name: "20th Television",
      origin_country: "US",
    },
    {
      id: 154887,
      logo_path: null,
      name: "20th Television Animation",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  recommendations: {
    page: 1,
    results: Array(21),
    total_pages: 2,
    total_results: 40,
  },
  release_date: "2021-11-12",
  release_dates: {
    results: [
      {
        iso_3166_1: "US",
        release_dates: [
          {
            certification: "",
            iso_639_1: "",
            note: "Disney+",
            release_date: "2021-11-12T00:00:00.000Z",
            type: 4,
          },
        ],
      },
      {
        iso_3166_1: "AR",
        release_dates: [
          {
            certification: "+10",
            iso_639_1: "",
            note: "Disney+ & Star+",
            release_date: "2021-11-12T00:00:00.000Z",
            type: 4,
          },
        ],
      },
    ],
  },
  revenue: 0,
  runtime: 4,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "",
  title: "Os Simpsons em Plusniversário",
  video: false,
  videos: { results: Array(1) },
  vote_average: 6.6,
  vote_count: 234,
};

test("getReleaseDateBR function", () => {
  expect(getReleaseDateBR(movieWithBR)).toBe("2021-11-12T00:00:00.000Z");
  expect(getReleaseDateBR(movieWitouthBR)).toBe("2021-11-12T00:00:00.000Z");
});

test("getFormattedReleaseDate function", () => {
  expect(getFormattedReleaseDate(movieWithBR)).toBe("11/11/2021");
});

test("getReleaseYear function", () => {
  expect(getReleaseYear(movieWithBR)).toBe(2021);
});

test("getCertification function", () => {
  expect(getCertification(movieWithBR)).toBe("");
});

test("getDuration function", () => {
  expect(getDuration(movieWithBR.runtime)).toBe("0h 4m");
});

test("getGenres function", () => {
  expect(getGenres(movieWithBR.genres)).toBe("Animação, Comédia, Fantasia");
});
