import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
}

`;

export default GlobalStyle;
