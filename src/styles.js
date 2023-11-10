import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #000;
}



button {
  cursor: pointer;
}
  a {
    text-decoration: none;
    color:black;
    font-size:16px;
  }


  li{
    list-style-type:none;
  }

`;

export default GlobalStyles;