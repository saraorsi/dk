import styled from 'styled-components'

export const NotasWrapper = styled.div`
    padding: .6rem 1rem;
`

export default function Notas({content}) {

    return(
        <NotasWrapper dangerouslySetInnerHTML={{ __html: content }} /> 
    )
    
}