import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
            <nav className={drawerClasses}>
        <ul>
            <li><a href="#link-presentation">Présentation</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;