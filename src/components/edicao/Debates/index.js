import { useEffect, useState } from "react";
export default function Debates({ sessoes }) {


    console.log(sessoes)

    const [debates, setDebates] = useState([]);
    useEffect(async () => {
        await sessoes && sessoes.map(({ debates }) => {
            debates && debates.map(debate => {
                setDebates(oldDebates => [...oldDebates, debate])
            })
        })
    }, []);
  

    return(
        <div>
        {debates.map((debate, i) =>
            <div key={i}>
                <div>
                <div>{debate.debate_titulo}</div>
                <div dangerouslySetInnerHTML={{ __html: debate.debate_sinopse }} />
                </div>
            </div>
        )}
    </div>

    )
    
}