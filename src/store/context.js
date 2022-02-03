import { useState, useEffect, createContext, useContext } from "react";
import api from "../api/api";

const MoviesContext = createContext({});

export default function MoviesContextProvider({ children }) {
  const [mostPopulars, setMostPopulars] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenres, setActiveGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("activeGenres", activeGenres);

  useEffect(() => {
    async function getPopularMovies(page) {
      try {
        const response = await api.get(
          `movie/popular?api_key=${
            process.env.REACT_APP_TMDB_API_KEY
          }&language=pt-BR&page=${page ? page : ""}`
        );

        // console.log("movies response", response);

        if (response.status !== 200) {
          throw new Error("Failed to load the data from the API");
        }

        const {
          data: { results },
        } = response;
        setMostPopulars(results);
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
        setIsLoading(false);
      }
    }

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

    getPopularMovies();
    getGenres();
  }, []);

  function getPopularMoviesByGenres(genres) {
    // console.log("mostPopulars", mostPopulars);
    // console.log("activeGenres", genres);
    // const popularMoviesByGenres = mostPopulars.filter(({ genre_ids }) =>
    //   genre_ids.some((genre_id) => genre_id === genres.map((genre) => genre))
    // );
    // console.log("popularMoviesByGenres", popularMoviesByGenres);
    // setMostPopulars(popularMoviesByGenres);
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
  } = useContext(MoviesContext);

  return {
    mostPopulars,
    isLoading,
    genres,
    activeGenres,
    setActiveGenres,
    getPopularMoviesByGenres,
  };
}
