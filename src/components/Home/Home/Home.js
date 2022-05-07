import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InventoryItems from '../InventoryItems/InventoryItems';
import Membership from '../Membership/Membership';
import Specialties from '../Specialties/Specialties';

const Home = () => {
    return (
        <div>
            <Banner />
            <Specialties />
            <InventoryItems />
            <Membership />
            <Contact />
        </div>
    );
};

export default Home;