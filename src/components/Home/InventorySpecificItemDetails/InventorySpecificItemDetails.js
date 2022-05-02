import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventorySpecificItemDetails = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    const { name, image, price, quantity, description, spplier_name } = item
    const id = params?.id
    let [newQuantity, setNewQuantity] = useState(quantity)
    const [isUpdate, setIsupdate] = useState(false)

    // Handle delivered
    const handleDelivered = () => {
        newQuantity = +(quantity - 1)
        setNewQuantity(String(newQuantity))
        fetch(`http://localhost:4000/inventory/${id}/${newQuantity}`, {
            method: 'PUT',
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                setIsupdate(!isUpdate)
            })
    }

    useEffect(() => {
        fetch(`http://localhost:4000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id, isUpdate])

    return (
        <div className='flex w-4/6 mx-auto shadow my-10 px-4 py-6'>
            <div className='w-1/3'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='p-4 w-2/3'>
                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-5">
                        <h2 className='font-semibold text-xl'>{name}</h2>
                        <p class="mb-4 w-2/3 text-sm font-normal text-gray-700">{description}</p>
                        <div className='mb-5'>
                            <h5 className='font-semibold'>Price: <span className=' font-bold'>{price} USD</span></h5>
                            <h5 className='font-semibold '>In stock: <span className=' font-light'>{quantity} pics</span> </h5>
                            <h5 className='font-semibold '>Diller Name: <span className=' font-light'>{spplier_name}</span> </h5>
                        </div>
                        <div>
                            <button
                                onClick={handleDelivered}
                                type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delivered</button>
                        </div>
                    </li>

                </ol>

            </div>
        </div>
    );
};

export default InventorySpecificItemDetails;