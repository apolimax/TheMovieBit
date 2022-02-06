import CastItem from "../CastItem";
import * as S from "./styles";

export default function Cast({ cast }) {
  return (
    <S.CastContainer>
      {cast.map((actor) => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </S.CastContainer>
  );
}
