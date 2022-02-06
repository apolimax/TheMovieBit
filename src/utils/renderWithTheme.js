import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

export const renderWithTheme = ({ children }) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
