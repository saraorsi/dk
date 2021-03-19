import styled from 'styled-components'

export const Container = styled.div`
`

export const DebatesItem = styled.div`
   border-bottom: 1px dashed var(--color);
    padding: .6rem 1rem;
    cursor: pointer;
    
    .debates-subtitle{
        font-size: var(--alpina-medium);
    }

    .debates-text{
        margin-top: .5rem;
        ${({ theme }) => theme.fonts.pathos.small};
        height: 0;
        overflow:hidden;
        transition: height 0.2s;
        &.open{
            height: auto;
        }
    }

    
`

