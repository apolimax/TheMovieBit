import styled from "styled-components";
import media from "styled-media-query";

export const FiltersContainer = styled.div`
  background-color: #2d0c5e;
  padding: 16px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
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
  h2 {
        padding: 35px 200px;
        font-size: 3rem;
        margin-bottom: 10px;
      }

  `}
`;

export const CategoryButtonsWrapp = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 905px;
  margin: 0 auto;
  margin-bottom: 20px;

  ${media.greaterThan("medium")`
    margin-bottom: 40px;
  
  `}
`;
