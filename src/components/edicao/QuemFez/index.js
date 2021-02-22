import styled from 'styled-components'

export const QuemFezItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;
`
QuemFezItem.Funcao = styled.div`
    font-size: .7rem;
`

QuemFezItem.Equipa = styled.div`
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
`

export default function QuemFez({quemFez}) {
   return(
        <div>
        {quemFez && quemFez.map(({funcao, equipa}, i) =>{
            return(
                <QuemFezItem key={funcao}>
                    <QuemFezItem.Funcao>{funcao}</QuemFezItem.Funcao>
                    <QuemFezItem.Equipa>{equipa}</QuemFezItem.Equipa>
                </QuemFezItem>
            )
        })}
        </div>
    )
    
}