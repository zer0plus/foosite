import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SideBtn, SideBarRoute, SidebarLink} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="menu">
                        Menu
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="register">
                        Register
                    </SidebarLink>
                </SidebarMenu>
                <SideBtn>
                    <SideBarRoute to='/login'>
                        Login
                    </SideBarRoute>
                </SideBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
