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


export default function Realizador({ realizador }) {
    return (
        <RealizadorWrapper>
            <div>{realizador.title.rendered}</div>
            <RealizadorWrapper.Bio dangerouslySetInnerHTML={{ __html: realizador.acf.biografia }}></RealizadorWrapper.Bio>
        </RealizadorWrapper>

    )

}