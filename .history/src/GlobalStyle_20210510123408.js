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
}
.container {
    margin: 3rem 14rem;
}
`

export default GlobalStyle;