import styled from 'styled-components'

export const QuemFezItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`

QuemFezItem.Equipa = styled.div`
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
`

export default function QuemFez({quemFez}) {
   return(
        <>
        {quemFez && quemFez.map(({funcao, equipa}, i) =>{
            return(
                <QuemFezItem key={funcao}>
                    <div>{funcao}</div>
                    <QuemFezItem.Equipa>{equipa}</QuemFezItem.Equipa>
                </QuemFezItem>
            )
        })}
        </>
    )
    
}