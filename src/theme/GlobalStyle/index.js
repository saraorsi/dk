import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    ${normalize}


    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.background.main.color};
        color: ${({ theme }) => theme.colors.primary.main.color};
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle;