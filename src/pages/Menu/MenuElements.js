import styled from 'styled-components';

export const MenuTitle = styled.div `
    text-align: center;
    margin-bottom: 2rem;
    }
`;

export const MenuH2 = styled.h2 `
    letter-spacing: 0.1rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-size: 2rem;

    @media screen and (min-width: 800px){
    font-size: 2.5rem;
    line-height: 1;
`;

export const Underline = styled.div `
    width: 5rem;
    height: 0.25rem;
    background: #c59d5f;
    margin-left: auto;
    margin-right: auto;
` ;

export const MenuWrapper = styled.section `
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    padding: 5rem 0;

    @media screen and (min-width: 992px){
        width: 95vw;
    }
`;

export const MenuWrapperCenter = styled.div `
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;

    @media screen and (min-width: 1200px) {
        width: 95vw;
        grid-template-columns: 1fr 1fr;
    }
`;

export const MenuArticle = styled.article `
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: 225px 1fr;
        gap: 0 1.25rem;
        max-width: 40rem;
    }
`;

export const ItemImg = styled.img `
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    border-radius: 0.3rem;
    display: block;

    @media screen and (min-width: 768px) {
        height: 175px;
    }

    @media screen and (min-width: 1200px) {
        height: 150px;
    }
`;

export const ItemHead = styled.header `
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted hsl(210, 22%, 49%);
`;

export const ItemText = styled.p `
    margin-bottom: 0;
    padding-top: 1rem;
`;

export const ItemTitle = styled.h4 `
    margin-bottom: 0.5rem;
    text-transform: capitalize;

`;

export const ItemTitleP = styled.h4 `
    margin-bottom: 0.5rem;
    color: rgb(235, 127, 94);
`;