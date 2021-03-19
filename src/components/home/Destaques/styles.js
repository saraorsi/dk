import styled from 'styled-components'

export const DestaquesItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
    padding: .6rem 1rem;

    .destaques-date{
        ${({ theme }) => theme.fonts.alpina.small};
    }

    .destaques-title{
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover{
            opacity: 0.7;
        }
    }

    .destaques-text{
        margin-top: .5rem;
        ${({ theme }) => theme.fonts.pathos.small};
        height: 0;
        overflow:hidden;
        transition: height 0.2s;
        &.open{
            height: auto;
        }

    }

    .destaques-image-container{
        img{
            height: 6rem;
            margin-left: 25%;
            margin-bottom: -1.5rem;
        }
    }
`