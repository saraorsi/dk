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