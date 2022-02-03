import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./store/context";
import Theme from "./styles/Theme";
import GLobalStyle from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesContextProvider>
        <Theme>
          <GLobalStyle />
          <App />
        </Theme>
      </MoviesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
