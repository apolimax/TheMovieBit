import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.lightPurple};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  ${media.greaterThan("medium")`
    display: block;
    padding: 16px 112px;
  
  `}
`;
