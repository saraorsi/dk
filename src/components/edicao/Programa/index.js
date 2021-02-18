import { ProgamaWrapper, ProgramaDia, SessaoWrapper } from './style/ProgramaWrapper'

export default function Programa({edicao}) {



    return(
       <ProgamaWrapper>
           {edicao.map(({ dia, numero, turno, filmes, debates }, i) => {
               return(
                   <div key={i}>
                    <ProgramaDia>
                        {dia}
                    </ProgramaDia>
                    <SessaoWrapper key={i}>
                            <SessaoWrapper.Sessao>
                                Sessão #{numero}, {turno}
                            </SessaoWrapper.Sessao>

                            {filmes && filmes.map((filme, i) => {
                                  return(
                                      <SessaoWrapper.Filme>
                                          {filme.filme_titulo}
                                      </SessaoWrapper.Filme>
                                  )
                            })}
                    
                    </SessaoWrapper>
                   </div>
               )
           })}  
       </ProgamaWrapper>
    )
    
}