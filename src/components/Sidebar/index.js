import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onCick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='about' onClick={toggle}>
                        ABOUT
                    </SidebarLink>
                    <SidebarLink to ='team' onClick={toggle}>
                        FOUNDERS
                    </SidebarLink>
                    <SidebarLink to ='theArts' onClick={toggle}>
                        THE ARTS
                    </SidebarLink>
                    <SidebarLink to ='faq' onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    
                    <SidebarLink to ='roadmap' onClick={toggle}>
                        ROAD MAP
                    </SidebarLink>
                    
                    <SidebarLink to ='otherWorks' onClick={toggle}>
                        OTHER  WORKS
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute >
                        Connect Wallet
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
