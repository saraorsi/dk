import styled from 'styled-components'

export const NotasWrapper = styled.div`
    padding: 1rem;
`

export default function Notas({content}) {

    return(
        <NotasWrapper dangerouslySetInnerHTML={{ __html: content }} /> 
    )
    
}