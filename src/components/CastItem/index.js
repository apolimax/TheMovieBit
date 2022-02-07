import * as S from "./styles";

export default function CastItem({ actor }) {
  return (
    <S.CastItemContainer>
      {!!actor.profile_path && (
        <>
          <img // only show actor if he/she has profile photo
            src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
            alt={actor.name}
          />
          <p className="actor_name">{actor.name}</p>
          <p className="actor_character">{actor.character}</p>
        </>
      )}
    </S.CastItemContainer>
  );
}
