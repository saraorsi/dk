import styled from 'styled-components';

export const ParticipantesWrapper = styled.div`
     font-size: .6rem;
    line-height: 1em;
    text-align: right;
    padding-top: .5rem;
    padding-bottom: 2rem;
`

ParticipantesWrapper.Title = styled.div`
    padding: .4rem .6rem;
`

ParticipantesWrapper.Item = styled.div`
    padding: .2rem .6rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    &.active{
        background-color: ${({ theme }) => theme.colors.primary.main.color};
        color: ${({ theme }) => theme.colors.background.main.color};
    }
`

