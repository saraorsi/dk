import React from 'react';
import styled from 'styled-components'


export const FilmesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

FilmesItem.Header = styled.div`
    &:hover{
        opacity: .5;
        cursor: pointer;
    }
`

FilmesItem.Titulo = styled.div``

FilmesItem.Realizador = styled.div`
    margin-top: -.2rem;
    ${({ theme }) => theme.fonts.alpina.medium};
`

FilmesItem.Content = styled.div`
    display: none;
    &.open{
        display: block;
    }
`

FilmesItem.Sinopse = styled.div`
    margin-top: .35rem;
    margin-bottom: .7rem;
    line-height: 1.3em;
    ${({ theme }) => theme.fonts.pathos.small};
`


export default function Filmes(props) {
    const [filmes, setFilmes] = React.useState([]);
    const edicoes = props.edicoes;

    React.useEffect(() => {
        edicoes.map(({ slug, acf: { sessao_repetidor } }) => {
            const edicao = slug;
            sessao_repetidor && sessao_repetidor.map(({ filmes }) => {
                filmes.map(filme => {
                    setFilmes(oldFilmes => [...oldFilmes, [filme, edicao]]);
                })
            })
        })
    }, []);

    filmes.sort((a, b) => (a[0].filme_titulo > b[0].filme_titulo ? 1 : -1))



    return (
        <div>
            {filmes.map((filme) => {
                return (
                    <FilmesItem key={filme[0].filme_titulo}>
                        <FilmesItem.Header>
                            <FilmesItem.Titulo>{filme[0].filme_titulo}</FilmesItem.Titulo>
                            <FilmesItem.Realizador>
                                {filme[0].realizadores && filme[0].realizadores.map(realizador => (<span key={realizador.id}>{realizador.post_title}</span>))}
                            </FilmesItem.Realizador>
                        </FilmesItem.Header>
                        {filme[0].filme_sinopse &&
                            <FilmesItem.Content>
                                <FilmesItem.Sinopse dangerouslySetInnerHTML={{ __html: filme[0].filme_sinopse }}>
                                </FilmesItem.Sinopse>
                            </FilmesItem.Content>
                        }
                    </FilmesItem>
                )
            })}
        </div>
    )
}