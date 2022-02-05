import styled from "styled-components";

export const Pagination = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 30px;
    list-style: none;

    li {
      cursor: pointer;
      color: ${(props) => props.theme.colors.lightPurple};
    }

    li.selected {
      color: #fff;
      background-color: ${(props) => props.theme.colors.darkPurple};
      padding: 2px 6px;
      border-radius: 3px;

      font-weight: 700;
    }

    li.disabled {
      color: ${(props) => props.theme.colors.gray};
      cursor: not-allowed;
    }
  }
`;
