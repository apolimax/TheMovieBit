import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function MoviesItem({ cover, title, date, id }) {
  const navigate = useNavigate();

  return (
    <div>
      <S.MovieItemContainer onClick={() => navigate(`/movie/${id}`)}>
        <img src={`https://image.tmdb.org/t/p/w154/${cover}`} alt={title} />
        <p>{title}</p>
        <S.Date>
          {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(
            new Date(date)
          )}
        </S.Date>{" "}
      </S.MovieItemContainer>
    </div>
  );
}
