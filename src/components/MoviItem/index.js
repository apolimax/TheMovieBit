import * as S from "./styles";

export default function MoviesItem({ cover, title, date }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <S.MovieItemContainer>
        <img src={`https://image.tmdb.org/t/p/w154/${cover}`} alt={title} />
        <S.Title>{title}</S.Title>
        <p>{date}</p> {/*format date */}
      </S.MovieItemContainer>
    </div>
  );
}
