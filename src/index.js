import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MoviesContextProvider from "./store/context";
import Theme from "./styles/Theme";
import GLobalStyle from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <Theme>
        <GLobalStyle />
        <App />
      </Theme>
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
