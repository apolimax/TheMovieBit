import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./store/context";
import Theme from "./styles/Theme";
import GLobalStyle from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <MoviesContextProvider>
          <GLobalStyle />
          <App />
        </MoviesContextProvider>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
