import styled, { css } from 'styled-components';

import { shade, animation } from 'polished';

export const Header = styled.header`
    display: flex;
    height: 100px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    background: #dfe9ff;
    padding: 0px 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 6px #e9e9e9;

    a {
        color: #3f3f5f;
        svg {
            color: #0f0f0f;
        }
    }
    strong {
        font-size: 24px;
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 20px;
    justify-content: center;
    margin-top: 20px;
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
    button {
        min-width: 100px;
        height: 100px;
        border: 0;
        border-radius: 10px;
        background: #dfe9ff;
        box-shadow: 6px 6px 6px #e9e9e9;
        transition: all 0.5s;
        &:hover {
            transform: scale(1.05);
            background: ${shade(0.05, '#dfe9ff')};
        }
    }
`;
