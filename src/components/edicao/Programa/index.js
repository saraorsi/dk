import { ProgamaWrapper, ProgramaDia, SessaoWrapper, FilmeWrapper, DebatesWrapper } from './style/ProgramaWrapper'
import Moment from 'react-moment';
import moment from 'moment';

export default function Programa({ sessoes }) {

    moment.locale('pt-pt');
    let diaActual, diaNovo;


    return (
        <ProgamaWrapper>
            {sessoes && sessoes.map(({ dia, numero, turno, filmes, debates }, i) => {

                if (diaActual != dia) {
                    diaNovo = true; diaActual = dia;
                } else {
                    diaNovo = false;
                }
                return (
                    <div key={i}>

                        {diaNovo ? (<ProgramaDia>
                            <Moment format="D MMMM, dddd">
                                {dia}
                            </Moment>
                        </ProgramaDia>) : ''}

                        <SessaoWrapper key={i}>
                            <SessaoWrapper.Sessao>
                                Sessão #{numero}, {turno}
                            </SessaoWrapper.Sessao>

                            {filmes && filmes.map((filme) => {
                                return (
                                    <FilmeWrapper key={filme.filme_titulo}>
                                       {filme.filme_titulo} 
                                       <FilmeWrapper.Info>
                                       {filme.filme_ano ? `, ${filme.filme_ano}` : null}{filme.filme_duracao ? `, ${filme.filme_duracao}min` : null}
                                       </FilmeWrapper.Info>
                                       {filme.realizadores && filme.realizadores.map(realizador => {
                                                console.log(realizador)
                                                return (
                                                    <FilmeWrapper.Realizador>{realizador.post_title}</FilmeWrapper.Realizador>
                                                )})}
                                        <FilmeWrapper.Sinopse  dangerouslySetInnerHTML={{ __html: filme.filme_sinopse }}>

                                        </FilmeWrapper.Sinopse>
                                    </FilmeWrapper>
                                )
                            })}


                            {debates && debates.map((debate, i) =>
                                <DebatesWrapper key={i}>
                                    {debate.debate_titulo}
                                </DebatesWrapper>
                            )}
                        </SessaoWrapper>
                    </div>
                )
            })}
        </ProgamaWrapper>
    )

}