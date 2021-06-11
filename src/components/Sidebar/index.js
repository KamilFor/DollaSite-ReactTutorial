import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrapper
} from './SidebarElements';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about">About</SidebarLink>
					<SidebarLink to="discover">Discover</SidebarLink>
					<SidebarLink to="services">Services</SidebarLink>
					<SidebarLink to="signUp">Sign Up</SidebarLink>
				</SidebarMenu>
				<SideBtnWrapper>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrapper>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
