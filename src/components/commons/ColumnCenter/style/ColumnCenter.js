import styled from 'styled-components'


export const Column = styled.div`
    left: 39.5vw;
    position: absolute;
    width: 5.5vw;
    height: 100vh;
    border-left: 2px solid ${({ theme }) => theme.colors.primary.main.color};
    border-right: 2px solid ${({ theme }) => theme.colors.primary.main.color};
`