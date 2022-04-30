import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Membership from '../Membership/Membership';
import NavBar from '../../Shared/NavBar/NavBar'
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <Membership />
        </div>
    );
};

export default Home;