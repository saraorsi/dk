import styled from 'styled-components'

export const RealizadorWrapper = styled.div`
    padding: .6rem 1rem;
`

RealizadorWrapper.Bio = styled.div`
    margin-top: .35rem;
    margin-bottom: .7rem;
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
`

RealizadorWrapper.Filme= styled.div`
    font-size: .5rem;
    line-height: 1.3em;
`


export default function Realizador({ realizador, edicoes }) {

    const realizadorID = realizador.id;

    const filmesRealizador = [];

    edicoes.map(  
        edicao => { 
            const sessoes = edicao.acf.sessao_repetidor
            return(
                sessoes && sessoes.map( sessao => {
                    const filmes = sessao.filmes;
                    return(
                        filmes && filmes.map( filme => {
                            const filmeTitulo = filme.filme_titulo;
                            const realizadores = filme.realizadores;
                            return(
                                realizadores && realizadores.map( realizador => {
                                    realizador.ID == realizadorID ? filmesRealizador.push(filmeTitulo) : ''
                                })
                            )
                        }) 
                    )
                })
            )
        }
    )


        


    return (
        <RealizadorWrapper>
            <div>{realizador.title.rendered}</div>
            <RealizadorWrapper.Bio dangerouslySetInnerHTML={{ __html: realizador.acf.biografia }}></RealizadorWrapper.Bio>
            {filmesRealizador && filmesRealizador.map(filme => <RealizadorWrapper.Filme>{filme}</RealizadorWrapper.Filme>)
            }
        </RealizadorWrapper>

    )

}