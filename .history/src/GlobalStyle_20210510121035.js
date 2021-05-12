import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
  margin: 0;
 background-color: #dce1e3;
}
 ul li {
    list-styles: none;
}
`

export default GlobalStyle;