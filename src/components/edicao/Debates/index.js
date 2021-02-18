
export default function Debates({ sessoes }) {


   

    return(
        <div>
            {sessoes && sessoes.map((sessao, i) => {
                return(
                    <div>
                    {sessao.debates && sessao.debates.map((debate, i) => {
                        return(
                            <div key={i}>{debate.debate_titulo}</div>
                        )
                    })}
                    </div>
                )
            })}
        </div>

    )
    
}