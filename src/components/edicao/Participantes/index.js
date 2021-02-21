import styled from 'styled-components';
import Link from "next/link";
import { useRouter } from 'next/router';

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
`

export default function Participantes({ participantes }) {
    const router = useRouter()
    participantes ? participantes.sort((a, b) => (a.post_title > b.post_title ? 1 : -1)) : ''
    return (
        <>
            {participantes ? (
                <ParticipantesWrapper>
                    <ParticipantesWrapper.Title>
                        Com a presença de
                    </ParticipantesWrapper.Title>
                    {participantes.map((participantes) => (
                        <ParticipantesWrapper.Item key={participantes.ID}>
                            <Link href={`/edicoes/${router.query.slug}/${participantes.post_name}`}>{participantes.post_title}</Link>
                        </ParticipantesWrapper.Item>
                    ))}
                </ParticipantesWrapper>
            ) : ''}
        </>
    )
}