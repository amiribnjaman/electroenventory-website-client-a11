import React, { useState, useEffect } from 'react';
import InventorySingleItem from '../InventorySingleItem/InventorySingleItem';


const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/inventoryItem')
            .then(res => res.json())
            .then(data => setInventoryItems(data))
    }, [])
    return (
        <div className='mt-6 mb-8 w-10/12 mx-auto grid grid-cols-3 gap-6'>
            {
                inventoryItems.map(inventoryItem => <InventorySingleItem
                    key={inventoryItem.id}
                    inventoryItem={inventoryItem}
                />)
            }
        </div>

    );
};

export default InventoryItems;

{/* <InventorySingleItem />
        <InventorySingleItem />
        <InventorySingleItem />
        <InventorySingleItem />
        <InventorySingleItem />
        <InventorySingleItem /> */}