import styled from 'styled-components'

export const SidebarRight = styled.div`
 position: fixed;
    top: 0;
    right: 2.75vw;
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    width: 3.5vw;
    height: 100%;
    color: ${({ theme }) => theme.colors.background.main.color};
    letter-spacing: .02em;
`
SidebarRight.Ica = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 2.75vw;
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.primary.main.color};
    border-left: 1px solid ${({ theme }) => theme.colors.background.main.color};
    font-family: 'Pathos';
    div{
        display:block;
        -webkit-transform: rotate(-90deg); 
        -moz-transform: rotate(-90deg); 
        transform: rotate(-90deg);
        position: absolute;
        bottom: -.5rem;
        left: 0rem;
        width: 100vh;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0; 
        transform-origin: 0 0;
        line-height: 2.75vw;
        font-size: .35rem;  
        color: ${({ theme }) => theme.colors.background.main.color};
    }
`

SidebarRight.Links = styled.div`
     position: fixed;
    top: 0;
    right: 2.75vw;
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    width: 3.5vw;
    height: 100%;
    color: ${({ theme }) => theme.colors.background.main.color};
    letter-spacing: .02em;
`

SidebarRight.Apordoc = styled.div`
    display:block;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    transform: rotate(-90deg);
    position: absolute;
    bottom: -.75rem;
    left: 0rem;
    width: 50vh;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0; 
    transform-origin: 0 0;
    line-height: 3.5vw;
    font-size: .5rem;  
    color: ${({ theme }) => theme.colors.background.main.color};
`

SidebarRight.Newsletter = styled.div`
    display:block;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    transform: rotate(-90deg);
    position: absolute;
    top: 3.7rem;
    left: 0rem;
    width: 50vh;
    -webkit-transform-origin: 0 0;  
    -moz-transform-origin: 0 0; 
    transform-origin: 0 0;
    line-height: 3.5vw;
    font-size: .5rem;  
    color: ${({ theme }) => theme.colors.background.main.color};
`