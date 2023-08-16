import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import App from "./App.tsx";
import { palette } from "../styled-constants";

import NeutrifProRegular from "./assets/fonts/NeutrifPro/NeutrifPro-Regular.ttf";
import NeutrifProMedium from "./assets/fonts/NeutrifPro/NeutrifPro-Medium.ttf";
import NeutrifProSemibold from "./assets/fonts/NeutrifPro/NeutrifPro-SemiBold.ttf";
import NeutrifProBold from "./assets/fonts/NeutrifPro/NeutrifPro-Bold.ttf";
import NeutrifProLight from "./assets/fonts/NeutrifPro/NeutrifPro-Light.ttf";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "NeutrifPro";
    font-weight: 300;
    src: local('NeutrifPro-Light'), url(${NeutrifProLight}) format('truetype');
  }

  @font-face {
    font-family: "NeutrifPro";
    font-weight: 400;
    src: local('Poppins-Regular'), url(${NeutrifProRegular}) format('truetype');
  }

  @font-face {
    font-family: "NeutrifPro";
    font-weight: 500;
    src: local('NeutrifPro-Medium'), url(${NeutrifProMedium}) format('truetype');
  }

  @font-face {
    font-family: "NeutrifPro";
    font-weight: 600;
    src: local('NeutrifPro-Semibold'), url(${NeutrifProSemibold}) format('truetype');
  }
      
  @font-face {
    font-family: "NeutrifPro";
    font-weight: 700;
    src: local('NeutrifPro-Bold'), url(${NeutrifProBold}) format('truetype');
  }
  
  body {
    background-color: ${palette.light};
    max-width: 100%;
    position: relative;
    font-family: "NeutrifPro", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
