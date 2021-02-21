import { ProgamaWrapper, ProgramaDia, SessaoWrapper } from './style/ProgramaWrapper'

export default function Programa({ sessoes }) {



    return (
        <ProgamaWrapper>
            {sessoes && sessoes.map(({ dia, numero, turno, filmes, debates }, i) => {
                return (
                    <div key={i}>
                        <ProgramaDia>
                            {dia}
                        </ProgramaDia>
                        <SessaoWrapper key={i}>
                            <SessaoWrapper.Sessao>
                                Sessão #{numero}, {turno}
                            </SessaoWrapper.Sessao>

                            {filmes && filmes.map((filme, i) => {
                                return (
                                    <SessaoWrapper.Filme key={i}>
                                        {filme.filme_titulo}
                                    </SessaoWrapper.Filme>
                                )
                            })}


                            {debates && debates.map((debate, i) =>
                                <SessaoWrapper.Debates key={i}>
                                    {debate.debate_titulo}
                                </SessaoWrapper.Debates>
                            )}
                        </SessaoWrapper>
                    </div>
                )
            })}
        </ProgamaWrapper>
    )

}