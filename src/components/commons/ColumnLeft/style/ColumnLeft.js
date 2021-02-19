import styled from 'styled-components'


export const Column = styled.div`
  position: absolute;
  width: 33vw;
  height: 100vh;
  left: 6.5vw;
  
`

Column.Title = styled.div`
  position: relative;
  width: 100%;
  height: 6.5vw;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main.color};
  font-size: 1.33rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`

Column.Circle = styled.div`
  position: absolute;
  top: .5rem;
  right: .6rem;
  height: .6rem;
  width: .62rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 1rem;
`

Column.Content = styled.div`
  height: calc(100vh - 6.5vw);
  overflow-y: auto;
  li{
      border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    a{
      display: inline-block;
      width: 100%;
      padding: .6rem 1rem;
    }
    &.active{
      background-color: ${({ theme }) => theme.colors.primary.main.color};
      color: ${({ theme }) => theme.colors.background.main.color};
    }
  }

`