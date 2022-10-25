import { createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";
import backgroundImage from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${DarkTheme}
    font-family: Poppins, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255);
    background-color: #242424;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;

    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
  }

  html {
    .light {
      ${LightTheme}
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

  button, a {
    font-family: 'Barlow';
  }

`;
