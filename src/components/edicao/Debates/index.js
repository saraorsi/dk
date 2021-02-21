import styled from 'styled-components'

export const DebatesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

export default function Debates({ sessoes }) {
    return (
        <div>
            {sessoes && sessoes.map((sessao, i) => {
                return (
                    <div>
                        {sessao.debates && sessao.debates.map((debate) => {
                            return (
                                <DebatesItem key={debate.debate_titulo}>{debate.debate_titulo}</DebatesItem>
                            )
                        })}
                    </div>
                )
            })}
        </div>

    )

}