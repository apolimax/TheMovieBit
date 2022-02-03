import styled from "styled-components";
import media from "styled-media-query";

export const MoviesListContainer = styled.main`
  /* width: 100%;*/
  margin: 40px auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
  justify-items: center;

  ${media.greaterThan("medium")`
    gap: 24px;
    margin: 40px 80px;
  `}
`;
