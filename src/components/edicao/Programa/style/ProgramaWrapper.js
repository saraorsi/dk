import styled, { css } from 'styled-components'

export const ProgamaWrapper = styled.div`
`


export const ProgramaDia = styled.div`
    font-size: .75rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export const SessaoWrapper = styled.div`
   border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
padding: .3rem 1rem .6rem;
`

SessaoWrapper.Sessao = styled.div`
`

SessaoWrapper.Filme = styled.div`
`

SessaoWrapper.Debates = styled.div`
`