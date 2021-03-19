import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

    @font-face {  
        font-family: 'Alpina';  
        font-weight: 400; 
        font-style: normal;  
        font-display: swap; /* Read next point */  
        unicode-range: U+000-5FF; /* Download only latin glyphs */  
        src: local('Alpina'),       
        url('/fonts/GT-Alpina-Fine-Condensed-Medium.woff') format('woff'),
        url('/fonts/GT-Alpina-Fine-Condensed-Medium.woff2') format('woff2');
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
        --color-background: #A4F7C6;
        --color-hover: #231F20;
        --color: #231F20;
        --alpina-medium: .8rem;
    }

    a{
        color: inherit;
        text-decoration: none;
    }


    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: var(--color-background);
        color: var(--color);
        font-family: 'Alpina';
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle;