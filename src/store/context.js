import { useState, useEffect, createContext, useContext } from "react";
import api from "../api/api";

const MoviesContext = createContext({});

export default function MoviesContextProvider({ children }) {
  const [mostPopulars, setMostPopulars] = useState([]);
  const [categories] = useState([
    "Ação",
    "Aventura",
    "Animação",
    "Comédia",
    "Crime",
    "Documentário",
    "Drama",
    "Família",
  ]);

  const [activeCategories, setActiveCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const response = await api.get(
          `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );

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

    async function getPopularMoviesByCategories() {}

    getPopularMovies();
  }, []);

  console.log("mostPopulars", mostPopulars);
  console.log("activeCategories", activeCategories);

  return (
    <MoviesContext.Provider
      value={{
        mostPopulars,
        isLoading,
        categories,
        activeCategories,
        setActiveCategories,
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
    categories,
    activeCategories,
    setActiveCategories,
  } = useContext(MoviesContext);

  return {
    mostPopulars,
    isLoading,
    categories,
    activeCategories,
    setActiveCategories,
  };
}
