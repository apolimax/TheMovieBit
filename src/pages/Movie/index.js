import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import api from "../../api/api";
import Cast from "../../components/Cast";
import Rating from "../../components/Rating";
import {
  getCertification,
  getDuration,
  getFormattedReleaseDate,
  getGenres,
  getReleaseYear,
} from "../../utils/utils";
import Base from "../Base";

import * as S from "./styles";
import Recomendations from "../../components/Recomendations";

export default function Movie() {
  const { id } = useParams();
  const movieId = Number(id);

  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getMovieDetails(id) {
      try {
        const response = await api.get(
          `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&append_to_response=credits,recommendations,release_dates,videos`
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

  // function getCrew(movie, department, n) {
  //   const crew = movie.credits.crew.filter(
  //     (item) => item.department === departmen;

  //   return crew;
  // }

  // function getCrew(movie) {

  //   const directing = movie.credits.crew.filter(
  //     (item) => item.department === "Directing"
  //   );

  //   return {
  //     writing: writing.splice(0, 3), // only the first two people in writing
  //     directing: directing.splice(0, 3), // only the first two people in directing
  //   };

  //   // console.log("writing", writing);
  //   // console.log("directing", directing);
  // }

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
            <h1>
              {currentMovieDetails.title} ({getReleaseYear(currentMovieDetails)}
              )
            </h1>
            <S.MovieNumbers>
              <p>{getCertification(currentMovieDetails)} anos</p>
              <span className="dot">•</span>
              <p>{getFormattedReleaseDate(currentMovieDetails)} (BR)</p>
              <span className="dot">•</span>
              <p>{getGenres(currentMovieDetails.genres)}</p>
              <span className="dot">•</span>
              <p>{getDuration(currentMovieDetails.runtime)}</p>
            </S.MovieNumbers>
            <Rating rating={currentMovieDetails.vote_average * 10} />
            <S.Sinopse>
              <h4>Sinopse</h4>
              <p>{currentMovieDetails.overview}</p>
            </S.Sinopse>
            <S.Crew>
              {currentMovieDetails.credits.crew?.slice(0, 4).map((item) => (
                <div key={item.credit_id}>
                  {item.name} <br />
                  {item.department}
                </div>
              ))}
            </S.Crew>
          </S.MovieDescription>
        </S.Banner>
      </S.BannerContainer>
      <S.MovieContent>
        <h2>Elenco Original</h2>
        <Cast cast={currentMovieDetails.credits.cast.slice(0, 10)} />
        {!!currentMovieDetails.videos.results[0]?.key && (
          <S.Trailer>
            <h2>Trailer</h2>
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${currentMovieDetails.videos.results[0].key}`}
            />
          </S.Trailer>
        )}
        {currentMovieDetails.recommendations.results.length > 0 && (
          <>
            <h2 className="recomendations">Recomendações</h2>
            <Recomendations
              recomendations={currentMovieDetails.recommendations.results.slice(
                0,
                6
              )}
            />
          </>
        )}
      </S.MovieContent>
    </Base>
  );
}
