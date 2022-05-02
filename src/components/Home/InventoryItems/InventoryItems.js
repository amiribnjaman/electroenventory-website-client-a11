import React, { useState, useEffect } from 'react';
import InventoryCard from '../InventoryCard/InventoryCard';


const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/inventoryItems')
            .then(res => res.json())
            .then(data => setInventoryItems(data))
    }, [])
    return (
        <div className='mt-6 mb-12 w-10/12 mx-auto grid grid-cols-3 gap-6'>
            {
                inventoryItems.map(inventoryItem => <InventoryCard
                    key={inventoryItem.id}
                    inventoryItem={inventoryItem}
                />)
            }
        </div>

    );
};

export default InventoryItems;