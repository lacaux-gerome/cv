import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "typeface-roboto";
import "typeface-roboto-condensed";
import { Reset } from "./styles/reset";
import App from "./cv/App";

ReactDOM.render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
