import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: overlay;
    
  }

  #root {
    height: inherit;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }
  
*{
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
::-webkit-scrollbar {
  display: none;
}

  &:focus {
    outline: none !important;
  }


body{
  margin: 0;
  height: 100dvh;
  font-family: 'Overpass', sans-serif,'Roboto', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  ul, li {list-style-type: none;}
`;
export default GlobalStyles;
