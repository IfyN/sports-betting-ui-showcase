import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 html, body, #root {
    background: ${(props) => props.theme.colors.gray}; 
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    
    color: ${(props) => props.theme.colors.white};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  :focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.yellow};
    outline-offset: 2px;
  }
`;
