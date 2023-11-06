import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: roboto, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
`

export const CorFundo = styled.div`
    background: linear-gradient(130deg, #F9D03F -80%, #171616 30%);
    height: 100%;

`