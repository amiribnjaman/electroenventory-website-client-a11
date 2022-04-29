import React from 'react';
import InventorySingleItem from '../InventorySingleItem/InventorySingleItem';


const InventoryItems = () => {
    return (
        <div className='mt-6 mb-8 w-10/12 mx-auto grid grid-cols-3 gap-6'>
            <InventorySingleItem />
            <InventorySingleItem />
            <InventorySingleItem />
            <InventorySingleItem />
            <InventorySingleItem />
            <InventorySingleItem />
        </div>
    );
};

export default InventoryItems;