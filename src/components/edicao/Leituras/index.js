import styled from 'styled-components'

export const LeiturasItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export default function Leituras({ leituras }) {
    return (
        <div>
            {leituras && leituras.map((leitura, i) =>
                <LeiturasItem key={leitura.post_title}>
                    {leitura.post_title}
                </LeiturasItem>
            )}
        </div>
    )

}