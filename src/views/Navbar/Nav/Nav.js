import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Nav.css';

const Nav = props => (
    <header className="nav_bar">
        <nav className="nav">
            <div className="nav-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="nav_logo"><a href="/">Logo</a></div>
            <div className="spacer" />
            <div className="nav_items">
                <ul>
                    <li><a href="#link-presentation">Présentation</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Nav;