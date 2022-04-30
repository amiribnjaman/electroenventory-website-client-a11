import React from 'react';
import './NavBar.css';
import MainNavBar from './MainNavBar/MainNavBar';
import NavBarTop from './NavBarTop/NavBarTop';
// import { useLocation } from 'react-router-dom';

const NavBar = () => {
    // const location = useLocation()
    // const path = location.pathname

    return (
        <>
            {/* {
                path.includes('login') ?
                    '' : */}
                    <div className=''>
                        <NavBarTop />
                        <MainNavBar />
                    </div>
            {/* } */}
        </>
    );
};

export default NavBar;