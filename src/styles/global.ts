import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  
  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -wekit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  @media (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 425px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 375px) {
    html {
      font-size: 81.25%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 75%;
    }
  }
`
