import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Alpina';
    src:
        url('/fonts/GT-Alpina-Fine-Condensed-Medium.woff') format('woff'),
        url('/fonts/GT-Alpina-Fine-Condensed-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap; 
    }

    @font-face {
    font-family: 'Pathos';
    src:
        url('/fonts/Pathos-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap; 
    }
    ${normalize}

    *{
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
   


    :root {
        font-size: 2.5vw;
        line-height: 1.2em;
    }

    a{
        color: inherit;
        text-decoration: none;
    }


    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.background.main.color};
        color: ${({ theme }) => theme.colors.primary.main.color};
        font-family: 'Alpina';
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle;