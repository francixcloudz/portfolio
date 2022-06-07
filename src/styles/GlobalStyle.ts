import { normalize, rgba } from "polished";
import { createGlobalStyle } from "styled-components";
import { AllFontsData } from "styles/theme/data/fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  ${AllFontsData.map(
    ({ fontName, variantName, variantWeight }) =>
      `@font-face {
      font-family: ${fontName};
      src: url('/fonts/${fontName}/${variantName}.ttf') format('truetype');
      font-weight: ${variantWeight};
      font-style: normal;
    }`,
  )}

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    overflow-y: overlay;
    font-family: ${({ theme }) => theme.fonts.Nunito.family};
  }
  
  body {
    position: relative;
    margin: 0px;
    background: #4117ab;
  }
  
  *,
  *::before,
  *::after {
    cursor: default;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    outline: none;
    margin: 0;
    border: 0;
  }
  
  h1,
  h2,
  h3,
  p,
  a,
  span,
  input,
  textarea {
    font-family: ${({ theme }) => theme.fonts.Nunito.family};
    line-height: 1.2em;
    text-align: center;
    text-decoration: none;
    color: black;
    text-shadow: 0 0.2em 0.2em ${({ theme }) => rgba(theme.colors.black, 0.15)};
  }
  
  h1 {
    font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
    letter-spacing: 1.5px;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
    letter-spacing: 1.5px;
  }
  
  h3 {
    font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
    letter-spacing: 1px;
  }
  
  @media (min-width: 801px) {
    h1 {
      font-size: 50px;
    }
  
    h2 {
      font-size: 30px;
    }
  
    h3 {
      font-size: 25px;
    }
  
    html,
    p,
    a,
    span,
    label,
    input,
    textarea,
    button {
      font-size: 20px;
    }
  }
  
  @media (max-width: 800px) {
    h1 {
      font-size: 25px;
    }
  
    h2 {
      font-size: 20px;
    }
  
    h3 {
      font-size: 18px;
    }
  
    html,
    p,
    a,
    span,
    label,
    input,
    textarea,
    button {
      font-size: 15px;
    }
  }
  
  h1,
  h2,
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
    display: none;
  }
  
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${({ theme }) => rgba(theme.colors.black, 0.4)};
    border-radius: 100px;
    box-sizing: content-box;
    background-clip: content-box;
    border-top: 20px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 0px solid transparent;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  }  
`;

export default GlobalStyle;
