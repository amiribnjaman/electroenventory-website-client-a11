import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Membership from '../Membership/Membership';

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