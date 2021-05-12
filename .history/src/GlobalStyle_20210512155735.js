import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      background-color: #dce1e3;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
}
 a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
}
.container {
    margin: 3rem 14rem;
    height: 74vh;
}
`

export default GlobalStyle;