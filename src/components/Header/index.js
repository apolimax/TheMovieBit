import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../../store/context";

import * as S from "./styles";

export default function Header() {
  const navigate = useNavigate();

  const { setActiveGenres, getPopularMovies } = useMovieContext();

  function goToHome() {
    setActiveGenres([]); // everytime someone clicks on the logo, the active genres must be erased
    getPopularMovies(1); // everytime someone clicks on the logo, the first most popular movies should show on the home page
    navigate("/");
  }

  return (
    <S.HeaderContainer onClick={goToHome}>
      <img src="/TDMBLogo.svg" alt="TMDB logo" aria-label="TMDB logo" />
    </S.HeaderContainer>
  );
}
