import styled from 'styled-components'

export const ProgamaWrapper = styled.div`
`

export const ProgramaDia = styled.div`
       ${({ theme }) => theme.fonts.alpina.medium};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export const SessaoWrapper = styled.div`
   border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .3rem 1rem .6rem;
`

SessaoWrapper.Sessao = styled.div`
    text-align: right;
    ${({ theme }) => theme.fonts.alpina.small};
`

export const FilmeWrapper = styled.div`
    margin-bottom: .5rem;
    &:last-of-type{
        margin-bottom: 0rem;
    }
`

FilmeWrapper.Info = styled.div`
    display: block;
    ${({ theme }) => theme.fonts.alpina.medium};
`

FilmeWrapper.Realizador = styled.div`
    margin-top: -.2rem;
    ${({ theme }) => theme.fonts.alpina.medium};
`

FilmeWrapper.Sinopse = styled.div`
    margin-top: .35rem;
    margin-bottom: .7rem;
    line-height: 1.3em;
    ${({ theme }) => theme.fonts.pathos.small};
`

export const DebatesWrapper = styled.div`
    margin-top: .3rem;
    ${({ theme }) => theme.fonts.alpina.small};
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