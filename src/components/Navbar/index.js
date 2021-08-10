import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';



const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavContainer>
                <NavLogo to='/'> Foo </NavLogo>
                {window.location.pathname === '/register' | window.location.pathname === '/login' ? <></> : 
                <>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about"> Our Story </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/menu"> Menu </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services"> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/register"> Register </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to = "/login" >Login</NavBtnLink>
                    </NavBtn>
                </>}
            </NavContainer>
        </Nav>
    </>
    )
}

export default Navbar