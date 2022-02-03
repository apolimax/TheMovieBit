import styled from "styled-components";

export const MovieItemContainer = styled.div`
  cursor: pointer;

  img {
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  p {
    max-width: 154px;
    font-weight: 500;
  }
`;

export const Date = styled.p`
  color: ${(props) => props.theme.colors.gray};
`;
