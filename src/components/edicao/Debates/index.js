import styled from 'styled-components'
import { useState } from 'react';
import { Container, Item } from './styles';


export function Debates({ sessoes }) {


    return (
        <Container>
            {sessoes && sessoes.map((sessao, i) => {
                return (
                    <div key={i}>
                        {sessao.debates && sessao.debates.map((debate, i)=> {   
                            return (
                                <Item key={i}>
                                    <Item.Visible>
                                        <div className="title">{debate.debate_titulo}</div>
                                        <div className="sub-title">{debate.debate_titulo}</div>
                                    </Item.Visible>
                                    {debate.debate_sinopse &&
                                    <Item.Invisible>
                                        <div dangerouslySetInnerHTML={{ __html: debate.debate_sinopse }}></div>
                                    </Item.Invisible>
                                    }
                                </Item>
                          
                            )
                        })}
                    </div>
                )
            })}
        </Container>

    )

}