import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav `
    background: hsl(126, 100%, 96%);
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
  `;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: hsl(125, 60%, 30%);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 900;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 68%);
        font-size: 1.8rem;
        cursor: pointer;
        color: hsl(125, 60%, 30%);
    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`
export const NavLinks = styled(LinkR)`
    color : hsl(125, 60%, 30%);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
        // color: black;
    }
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
` 

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #0d0d0d;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(20%, 20%, 20%);
        color: #fff;
    }
`;