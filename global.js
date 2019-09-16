import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    font-family: Quicksand, cursive, sans-serif;
  }
`;

export default Global;
