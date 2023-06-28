import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle<{}>`

  @font-face {
      font-family: 'marvelbold';
      src: url('../fonts/marvel-bold.woff2') format('woff2'),
          url('../fonts/marvel-bold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'marvelregular';
      src: url('../fonts/marvel-regular.woff2') format('woff2'),
          url('../fonts/marvel-regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  h1, h2{
    margin-bottom: 20px;
  }

  a{
    text-decoration: none;
  }

  body {
    font-family: marvelregular, sans-serif;
    font-size: 16;
  }
`;

export default GlobalStyle;
