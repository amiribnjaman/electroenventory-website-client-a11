import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InventoryItems from '../InventoryItems/InventoryItems';
import Membership from '../Membership/Membership';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <Membership />
            <Contact />
        </div>
    );
};

export default Home;