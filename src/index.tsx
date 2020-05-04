import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "typeface-roboto";
import "typeface-roboto-condensed";
import "typeface-montserrat";

import App from "./cv/App";
import { Reset } from "./styles/reset";
import { GlobalStyle } from "styles/global-style";

ReactDOM.render(
  <StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById("root")
);
