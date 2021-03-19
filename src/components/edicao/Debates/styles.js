import styled from 'styled-components'

export const Container = styled.div`
`

export const Item = styled.div`
   border-bottom: 1px dashed var(--color);
    padding: .6rem 1rem;
`

Item.Visible = styled.div`
    cursor: pointer;
    .sub-title{
        font-size: var(--alpina-medium);
    }
`

Item.Invisible = styled.div`
    display: none;
    padding-top: .5rem;
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
    &.open{
        display: block;
    }
`