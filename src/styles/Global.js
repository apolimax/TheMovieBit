import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: "Roboto", sans-serif;
    }

    button {
      cursor: pointer;
    }
    
`;

export default GLobalStyle;
