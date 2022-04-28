import React from 'react';

import './NavBar.css';
import MainNavBar from './NavBarTop/MainNavBar/MainNavBar';
import NavBarTop from './NavBarTop/NavBarTop';

const NavBar = () => {
    return (
        <div className=''>
            <NavBarTop />
            <MainNavBar />
        </div>
    );
};

export default NavBar;