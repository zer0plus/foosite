import styled from 'styled-components';

export const RegTitle = styled.h1`
    text-align: center;
    margin-top: 3.5%;
    border-inline: 1px;
`;

export const RegWrapper = styled.div `
    // display: block;
    // border: 2px solid red;
    // padding: 0.5rem;
    // margin-right: 33rem;
    // margin-left: 33rem;
    // margin-top: 5%;
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: hsl(0, 0%, 99%);
`;

export const RegForm = styled.form `
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 480px) {
        height: 80%;
    }
`;

export const FormContent = styled.div `
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 480px){
        padding: 10px;
    }
`;

export const Form = styled.form `
    display: grid;
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }
`;

// export const TBC