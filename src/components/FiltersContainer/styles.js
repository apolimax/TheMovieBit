import styled from "styled-components";
import media from "styled-media-query";

export const FiltersContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkPurple};
  padding: 16px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 10px;
  }

  ${media.greaterThan("medium")`
    h2 {
      font-size: 2rem;
    }

    p {
      text-align: center;
    }
    `}

  ${media.greaterThan("large")`
      padding: 85px 330px;
      h2 {
        font-size: 3rem;
      }

  `}
`;

export const CategoryButtonsWrapp = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
