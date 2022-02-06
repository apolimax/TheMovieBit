import MoviesItem from "../MoviItem";
import * as S from "./styles";

export default function Recomendations({ recomendations }) {
  return (
    <S.RecomendationsContainer>
      {recomendations.map((movie) => (
        <div key={movie.id}>
          <MoviesItem
            cover={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            id={movie.id}
          />
        </div>
      ))}
    </S.RecomendationsContainer>
  );
}
