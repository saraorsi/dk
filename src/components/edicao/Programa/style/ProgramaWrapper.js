import styled, { css } from 'styled-components'

export const ProgamaWrapper = styled.div`
`


export const ProgramaDia = styled.div`
    font-size: .7rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export const SessaoWrapper = styled.div`
   border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
padding: .3rem 1rem .6rem;
`

SessaoWrapper.Sessao = styled.div`
    text-align: right;
    font-size: .5rem;
`

export const FilmeWrapper = styled.div`
    margin-bottom: .5rem;
    &:last-of-type{
        margin-bottom: 0rem;
    }
`

FilmeWrapper.Info = styled.div`
    display: inline;
    font-size: .7rem;
`

FilmeWrapper.Realizador = styled.div`
    margin-top: -.2rem;
    font-size: .7rem;
`

FilmeWrapper.Sinopse = styled.div`
    margin-top: .35rem;
    margin-bottom: .7rem;
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
`

export const DebatesWrapper = styled.div`
margin-top: .3rem;
   font-size: .5rem;
line-height: 1.3em;
`


export const Accordion = styled.div`

`

Accordion.Btn = styled.div`
    cursor: pointer
`

Accordion.Content = styled.div`
    cursor: pointer;
    display: none;
    &.open{
        display: block;
    }
`