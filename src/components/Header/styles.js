import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  background-color: #5c16c5;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  img {
    cursor: pointer;
  }

  ${media.greaterThan("medium")`
    display: block;
    padding: 16px 112px;
  
  `}
`;
