import styled from 'styled-components';

export const BtnWrapper = styled.div `
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
`;

export const CategoryBtn = styled.button `
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: hsl(125, 60%, 30%);
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;

    &:hover {
        background: hsl(125, 60%, 30%);
        color: #fff;
    }
`;