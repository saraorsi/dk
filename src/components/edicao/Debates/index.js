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

    const [accordion, setAccordion] = useState([]);

    const eventHandler = (e, id) => {
        e.preventDefault();
        setAccordion(oldstate => [...oldstate, id])
    }
    
    let indice = 1;
    return (
        <div>
            {sessoes && sessoes.map((sessao, i) => {
                return (
                    <div key={i}>
                        {sessao.debates && sessao.debates.map((debate, i)=> {   
                            const id = indice++;
                            return (
                                <DebatesItem key={id}>
                                    <DebatesItem.Title onClick={(e) => eventHandler(e, id)}><span>#{id}</span>{debate.debate_titulo}</DebatesItem.Title>
                                    {debate.debate_sinopse &&
                                    <DebatesItem.Content>
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