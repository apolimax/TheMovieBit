import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightPurple: "#5c16c5",
    darkPurple: "#2d0c5e",
    caramel: "#D18000",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
