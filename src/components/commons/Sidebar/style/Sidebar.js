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