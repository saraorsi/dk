import styled from 'styled-components'
import { useState } from 'react';

export const DebatesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

DebatesItem.Title = styled.div`
    cursor: pointer;
    span{
        ${({ theme }) => theme.fonts.alpina.medium};
        margin-right: .3rem;
    }
`

DebatesItem.Content = styled.div`
    display: none;
    &.open{
        display: block;
    }
`
DebatesItem.Text = styled.div`
    padding-top: .5rem;
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
`
export default function Debates({ sessoes }) {
    return (
        <div>
            {sessoes && sessoes.map((sessao, i) => {
                return (
                    <div>
                        {sessao.debates && sessao.debates.map((debate) => {
                            const [accordion, setAccordion] = useState(false);
                            function toggle() {
                                setAccordion(!accordion)
                            }
    
                            return (
                                <DebatesItem key={debate.debate_titulo}>
                                    <DebatesItem.Title onClick={toggle}><span>#{i + 1}</span>{debate.debate_titulo}</DebatesItem.Title>
                                    {debate.debate_sinopse &&
                                    <DebatesItem.Content className={`${accordion == true ? 'open' : 'close'}`}>
                                        <DebatesItem.Text dangerouslySetInnerHTML={{ __html: debate.debate_sinopse }}></DebatesItem.Text>
                                    </DebatesItem.Content>
                                    }
                                </DebatesItem>
                            )
                        })}
                    </div>
                )
            })}
        </div>

    )

}