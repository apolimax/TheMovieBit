import { useState, useEffect, createContext, useContext } from "react";
import api from "../api/api";

const MoviesContext = createContext({});

export default function MoviesContextProvider({ children }) {
  const [mostPopulars, setMostPopulars] = useState([]);
  const [mostPopularsContext, setMostPopularsContext] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenres, setActiveGenres] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  console.log("currentPage", currentPage);

  const [isLoading, setIsLoading] = useState(true);

  // console.log("activeGenres", activeGenres);

  async function getPopularMovies(currentPage) {
    try {
      const response = await api.get(
        `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&page=${currentPage}`
      );

      console.log("most populars", response.data.results);

      if (response.status !== 200) {
        throw new Error("Failed to load the data from the API");
      }

      const {
        data: { results },
      } = response;
      setMostPopulars(results);
      setMostPopularsContext(results); // I won't change its state inside the app. I'll only use it to set the new state from the filters.
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function getGenres() {
      try {
        const response = await api.get(
          `genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`
        );

        // console.log("genres", genres);

        if (response.status !== 200) {
          throw new Error("Failed to load the data from the API");
        }

        const {
          data: { genres },
        } = response;
        setGenres(genres);
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
        setIsLoading(false);
      }
    }

    getPopularMovies(currentPage);
    getGenres();
  }, [currentPage]);

  function getPopularMoviesByGenres(genres) {
    if (genres.length === 0) {
      // if (currentPage === 1) {}
      getPopularMovies(currentPage);
    }

    const popularMoviesByGenres = [];

    mostPopularsContext.forEach((movie) => {
      movie.genre_ids.forEach((genre_id) => {
        genres.forEach((genre) => {
          if (genre_id === genre) {
            popularMoviesByGenres.push(movie);
          }
        });
      });
    });

    const newPopularMoviesByGenres = Array.from(new Set(popularMoviesByGenres));

    setMostPopulars(newPopularMoviesByGenres);
  }

  // console.log("mostPopulars", mostPopulars);
  // console.log("activeGenres", activeGenres);

  return (
    <MoviesContext.Provider
      value={{
        mostPopulars,
        isLoading,
        genres,
        activeGenres,
        setActiveGenres,
        getPopularMoviesByGenres,
        currentPage,
        setCurrentPage,
        getPopularMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovieContext() {
  const {
    mostPopulars,
    isLoading,
    genres,
    activeGenres,
    setActiveGenres,
    getPopularMoviesByGenres,
    currentPage,
    setCurrentPage,
    getPopularMovies,
  } = useContext(MoviesContext);

  return {
    mostPopulars,
    isLoading,
    genres,
    activeGenres,
    setActiveGenres,
    getPopularMoviesByGenres,
    currentPage,
    setCurrentPage,
    getPopularMovies,
  };
}
