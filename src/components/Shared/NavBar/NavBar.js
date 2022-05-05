import React from 'react';
import './NavBar.css';
import MainNavBar from './MainNavBar/MainNavBar';
import NavBarTop from './NavBarTop/NavBarTop';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation()
    const path = location.pathname

    return (
        <>
            {/* {
                path.includes('login') ?
                    '' : */}
            <div className={path.includes('login') || path.includes('signup') || path.includes('forgotPassword') ? 'hidden' : 'block'}>
                <NavBarTop />
                <MainNavBar />
            </div>
            {/* } */}
        </>
    );
};

export default NavBar;