import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export default function Header() {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer onClick={() => navigate("/")}>
      <img src="/TDMBLogo.svg" alt="TMDB logo" aria-label="TMDB logo" />
    </S.HeaderContainer>
  );
}
