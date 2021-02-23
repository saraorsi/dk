import styled from 'styled-components'
import { useState } from 'react';

export const DebatesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

DebatesItem.Title = styled.div`
    cursor: pointer;
`

DebatesItem.Content = styled.div`
    display: none;
    &.open{
        display: block;
    }
`
DebatesItem.Text = styled.div`
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
                                    const[accordion, setAccordion] = useState(false);

                                    function toggle(){
                                        if (accordion == true) {
                                          return setAccordion(false)
                                        }
                                        setAccordion(true)
                                      }
                            return (
                                <DebatesItem key={debate.debate_titulo}>
                                    <DebatesItem.Title onClick={toggle}>{debate.debate_titulo}</DebatesItem.Title>
                                    <DebatesItem.Content className={`${accordion == true ? 'open' : 'close' }`}> 
                                        <DebatesItem.Text dangerouslySetInnerHTML={{ __html: debate.debate_sinopse}}></DebatesItem.Text>
                                    </DebatesItem.Content>
                                </DebatesItem>
                            )
                        })}
                    </div>
                )
            })}
        </div>

    )

}