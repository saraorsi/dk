import styled from 'styled-components'

export const DestaquesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export default function Destaques({ destaque }) {
    return (
        <DestaquesItem>
            <div>{destaque.title.rendered}</div>
        </DestaquesItem>

    )

}