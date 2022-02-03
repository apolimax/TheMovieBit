import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;

  background: ${(props) =>
    props.highlight ? props.theme.colors.caramel : "#ffffff"};
  border: none;
  color: ${(props) => (props.highlight ? "#ffffff" : "#323232")};

  border-radius: 4px;
  padding: 6px 12px;

  span {
    margin-right: ${(props) => (props.highlight ? "3px" : "0")};
  }
`;
