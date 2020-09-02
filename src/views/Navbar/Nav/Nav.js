import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Nav.css';

const Nav = props => (
    <header className="nav_bar">
        <nav className="nav">
            <div className="nav-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="nav_logo">
                <a href="/">
                    <img src="./logo.png" alt="logo-chat" className="logo"/>
                </a>
            </div>
            <div className="spacer" />
            <div className="nav_items">
                <ul>
                    <li><a href="#link-presentation">Présentation</a></li>
                    <li><a href="#link-portfolio">Portfolio</a></li>
                    <li><a href="#link-contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Nav;