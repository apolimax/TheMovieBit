import MoviesItem from "../MoviItem";
import * as S from "./styles";

export default function Recomendations({ recomendations }) {
  return (
    <S.RecomendationsContainer>
      {recomendations.map((movie) => (
        <div key={movie.id}>
          {!!movie.release_date && ( // some movies doesn't have release date, so I'm showing only the ones that has release date
            <MoviesItem
              cover={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              id={movie.id}
            />
          )}
        </div>
      ))}
    </S.RecomendationsContainer>
  );
}
