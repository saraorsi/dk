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


export default function Realizador({ realizador, sessoes }) {

    const realizadorID = realizador.id;
    const filmesRealizador = [];

    


    sessoes.map( sessao => {
        const filmes = sessao.filmes
        return(
            filmes && filmes.map( filme => {
                const filmeTitulo = filme.filme_titulo;
                const filmeAno = filme.filme_ano;
                const filmeDuracao = filme.filme_duracao;
                const realizadores = filme.realizadores;
                return(
                        realizadores && realizadores.map( realizador => {
                            realizador.ID == realizadorID ? filmesRealizador.push({titulo: filmeTitulo, ano:  filmeAno, duracao: filmeDuracao}) : ''
                        })
                    )
                }
        ))
    } )

    console.log(filmesRealizador)

    return (
        <RealizadorWrapper>
            <div>{realizador.title.rendered}</div>
            <RealizadorWrapper.Bio dangerouslySetInnerHTML={{ __html: realizador.acf.biografia }}></RealizadorWrapper.Bio>
            {filmesRealizador && filmesRealizador.map(filme => <RealizadorWrapper.Filme>{filme.titulo}, {filme.ano}, {filme.duracao} min</RealizadorWrapper.Filme>)
            }
        </RealizadorWrapper>

    )

}