import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import Base from "../Base";

import * as S from "./styles";

export default function Movie() {
  const { id } = useParams();
  const movieId = Number(id);

  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails(id) {
      try {
        const response = await api.get(
          `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&append_to_response=credits,recommendations,release_dates`
        );

        console.log("movie recommendations", response);

        if (response.status !== 200) {
          throw new Error("Failed to load the data from the API");
        }

        const { data } = response;

        setCurrentMovieDetails(data);
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
        setIsLoading(false);
      }
    }

    getMovieDetails(movieId);
  }, [movieId]);

  function getReleaseDate(movie) {
    const releaseDateBR = movie.release_dates?.results?.filter(
      (item) => item.iso_3166_1 === "BR"
    )[0].release_dates[0].release_date;

    return new Intl.DateTimeFormat("pt-BR").format(new Date(releaseDateBR));
  }

  function getCertification(movie) {
    const certification = movie.release_dates?.results?.filter(
      (item) => item.iso_3166_1 === "BR"
    )[0].release_dates[0].certification;

    return certification;
  }

  function getDuration(runtime) {
    const hour = `${runtime / 60}`[0];
    const minutes = runtime % 60;

    return `${hour}h ${minutes}m`;
  }

  function getGenres(genres) {
    const generos = genres?.map((genre) => `${genre.name}, `).join(" ");

    return generos;
  }

  // movie details: poster, title, release year, age, release date brazil, genres, duration, grade, casting, movie description, trailer, recomendation
  if (isLoading) {
    return <p>Loading content ...</p>;
  }
  return (
    <Base>
      <S.BannerContainer>
        <S.Banner>
          <S.Image>
            <img
              src={`https://image.tmdb.org/t/p/w342/${currentMovieDetails.poster_path}`}
              alt={currentMovieDetails.title}
            />
          </S.Image>
          <S.MovieDescription>
            <h1>{currentMovieDetails.title}</h1>
            <p>{getCertification(currentMovieDetails)}</p>
            <p>{getReleaseDate(currentMovieDetails)} (BR)</p>
            <p>{getGenres(currentMovieDetails.genres)}</p>
            <p>{getDuration(currentMovieDetails.runtime)}</p>
          </S.MovieDescription>
        </S.Banner>
      </S.BannerContainer>
    </Base>
  );
}
