import styled from 'styled-components'

export const RealizadorWrapper = styled.div`
    padding: .6rem 1rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
`

RealizadorWrapper.Bio = styled.div`
display: none;
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

export default function Cineastas({ realizadores }) {


    const realizadoresSort = realizadores;

    realizadoresSort.sort((a, b) => (a.title.rendered > b.title.rendered ? 1 : -1))
    return (
        realizadoresSort && realizadoresSort.map(realizador => {
            return (
                <RealizadorWrapper>
                    <div>{realizador.title.rendered}</div>
                    <RealizadorWrapper.Bio dangerouslySetInnerHTML={{ __html: realizador.acf.biografia }}></RealizadorWrapper.Bio>
                </RealizadorWrapper>
            )
        })
    )
}



