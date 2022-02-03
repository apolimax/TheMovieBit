import { useMovieContext } from "../../store/context";
import MoviesItem from "../MoviItem";
import * as S from "./styles";

export default function MoviesListContainer() {
  const { mostPopulars } = useMovieContext();

  return (
    <S.MoviesListContainer>
      {mostPopulars.map((movie) => (
        <MoviesItem
          key={movie.id}
          cover={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
        />
      ))}
    </S.MoviesListContainer>
  );
}
