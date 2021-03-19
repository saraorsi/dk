import { useState } from 'react';
import { DebatesItem } from './styles';



export function Debates({ sessoes }) {


    return (
        <>
            {sessoes && sessoes.map((sessao, i) => {
                return (
                    <div key={i}>
                        {sessao.debates && sessao.debates.map((debate, i)=> {   
                            return (
                                <DebatesItem key={i}>
                                    <div>
                                        <div className="debates-title">{debate.debate_titulo}</div>
                                        {debate.debate_subtitulo &&
                                            <div className="debates-subtitle">{debate.debate_subtitulo}</div>
                                        }
                    
                                    </div>
                                    {debate.debate_sinopse &&
                                    <div>
                                        <div className="debates-text" dangerouslySetInnerHTML={{ __html: debate.debate_sinopse }}></div>
                                    </div>
                                    }
                                </DebatesItem>
                          
                            )
                        })}
                    </div>
                )
            })}
        </>

    )

}