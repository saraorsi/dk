import React from 'react';
import styled, { css } from 'styled-components'


export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    background-color: var(--color);
    width: 6.5vw;
    height: 100%;
    color: var(--background-color);
    letter-spacing: .02em;
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ theme }) => theme.colors.background.main.color};
`

MenuWrapper.Logo = styled.div`
    display:block;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    transform: rotate(-90deg);
    position: absolute;
    bottom: -1.9rem;
    left: 0rem;
    width: 10rem;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0; 
    transform-origin: 0 0;
    line-height: 6.5vw;
    font-size: 1.2rem;
    text-transform: uppercase;
`
