import styled from 'styled-components'


export const Column = styled.div`
    left: 39.5vw;
    position: absolute;
    width: 5.5vw;
    height: 100vh;
    border-left: 2px solid ${({ theme }) => theme.colors.primary.main.color};
    border-right: 2px solid ${({ theme }) => theme.colors.primary.main.color};
`

Column.Circle = styled.div`
  position: absolute;
  top: .5rem;
  right: .71rem;
  height: .6rem;
  width: .62rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 1rem;
`

Column.Content = styled.div`
    display:block;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    transform: rotate(-90deg);
    position: absolute;
    bottom: -1.5rem;
    left: 0rem;
    width: 100vh;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0; 
    transform-origin: 0 0;
    line-height: 5.5vw;
    font-size: .75rem;  
    text-transform: uppercase;
`
