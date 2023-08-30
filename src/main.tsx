import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "./styles/reset";
import { GlobalStyle } from "@styles/global-style";
import App from "./cv/App";

import "typeface-roboto";
import "typeface-roboto-condensed";
import "typeface-montserrat";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
