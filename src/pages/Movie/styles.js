import styled from "styled-components";
import media from "styled-media-query";

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkPurple};
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 8px;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  ${media.greaterThan("medium")`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const Image = styled.div``;

export const MovieDescription = styled.div`
  color: #fff;
  h1 {
    text-align: center;
    max-width: 342px;
  }
`;
