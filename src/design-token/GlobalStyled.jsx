import { createGlobalStyle } from "styled-components";
import OmyuPretty from "./omyu pretty.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Omyu Pretty";
    src: url(${OmyuPretty}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: "Omyu Pretty", sans-serif;
    background: #FFFCF0;
    color: #13251A;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input,
  textarea,
  button {
    outline: none;
    font: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  textarea {
    resize: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: #13613C;
    color: white;
  }
`;

