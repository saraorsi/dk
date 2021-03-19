import styled from 'styled-components'

export const MenuItem = styled.div`
  cursor: pointer;
  transition: background-color .2s;
  &:hover{
    background-color: var(--color-hover);
  }
  span{
    display: inline-block;
      font-size: .7rem;
      text-transform: uppercase;
      margin-left: .35rem;
  }
`