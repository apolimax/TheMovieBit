import MoviesItem from "../MoviItem";
import * as S from "./styles";

export default function MoviesListContainer({ movies }) {
  return (
    <S.MoviesListContainer>
      {movies.map((movie) => (
        <MoviesItem
          key={movie.id}
          id={movie.id}
          cover={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
        />
      ))}
    </S.MoviesListContainer>
  );
}
