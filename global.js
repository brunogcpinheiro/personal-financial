import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: Quicksand, cursive, sans-serif;
  }

  body {
    font-family: Quicksand, cursive, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    cursor: pointer;
  }
`;

export default Global;
