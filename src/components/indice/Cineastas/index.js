import styled from 'styled-components'
import { useState } from 'react';

export const RealizadorWrapper = styled.div`
    padding: .6rem 1rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
`

RealizadorWrapper.Title = styled.div`
    cursor: pointer;
    &:hover{
        opacity: .5;
    }
`

RealizadorWrapper.Content = styled.div`
    margin-top: .35rem;
    margin-bottom: .7rem;
    font-size: .5rem;
    line-height: 1.3em;
    font-family: 'Pathos';
    display: none;
    &.open{
        display: block;
    }
`

RealizadorWrapper.Filme = styled.div`
        ${({ theme }) => theme.fonts.alpina.small};
    line-height: 1.3em;
`

export default function Cineastas({ realizadores }) {
    const realizadoresSort = realizadores;
    realizadoresSort.sort((a, b) => (a.title.rendered > b.title.rendered ? 1 : -1))
    return (
        realizadoresSort && realizadoresSort.map(realizador => {
            const [accordion, setAccordion] = useState(false);
            function toggle() {
                setAccordion(!accordion)
            }
            return (
                <RealizadorWrapper key={realizador.id}>
                    <RealizadorWrapper.Title  onClick={toggle}>{realizador.title.rendered}</RealizadorWrapper.Title>
                    <RealizadorWrapper.Content className={`${accordion == true ? 'open' : 'close'}`}>
                        <div dangerouslySetInnerHTML={{ __html: realizador.acf.biografia }}></div>
                    </RealizadorWrapper.Content>
                </RealizadorWrapper>
            )
        })
    )
}



