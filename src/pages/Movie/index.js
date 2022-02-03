import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import Base from "../Base";

export default function Movie() {
  const { id } = useParams();
  const movieId = Number(id);

  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails(id) {
      try {
        const response = await api.get(
          `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`
        );

        console.log("movie details", response);

        if (response.status !== 200) {
          throw new Error("Failed to load the data from the API");
        }

        const { data } = response;
        setCurrentMovieDetails(data.data);
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
        setIsLoading(false);
      }
    }

    getMovieDetails(movieId);
  }, [movieId]);

  return <Base></Base>;
}
