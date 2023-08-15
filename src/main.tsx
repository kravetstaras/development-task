import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import App from "./App.tsx";
import palette from "../palette.ts";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background-color: ${palette.light};
    max-width: 100%;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
