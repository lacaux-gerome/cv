import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "typeface-roboto";
import "typeface-roboto-condensed";
import "typeface-montserrat";
import { Reset } from "./styles/reset";
import App from "./cv/App";

ReactDOM.render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>,
  document.getElementById("root")
);
