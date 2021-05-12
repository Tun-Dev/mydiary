import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {

 background-color: #dce1e3;
}
 a {
    text-decoration: none;
    color: #dce1e3;
}
`

export default GlobalStyle;