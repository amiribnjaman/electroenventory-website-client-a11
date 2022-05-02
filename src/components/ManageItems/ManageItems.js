import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageItems = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:4000/allInventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleNavigate= (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='w-10/12 mx-auto my-14'>
            <h2 className='text-lg font-semibold mb-2'>Manage Items</h2>
            <hr className='mb-7' />
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item =>  <tr onClick={()=> handleNavigate(item._id)} class="border-b cursor-pointer  dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td class="px-6 py-4 text-gray-700">
                                    {item.description.length > 30 ? item.description.slice(0, 30) + '...' : item.description}
                                </td>
                                <td class="px-6 py-4 text-gray-700">
                                    $ {item.price}
                                </td>
                                <td class="px-6 py-4 text-gray-700">
                                    {item.quantity} items
                                </td>
                                <td class="px-6 py-4 text-gray-700">
                                    {item.spplier_name}
                                </td>
                                <td class="px-6 py-3 ">
                                    <img width={35} src={item.image} alt="" />
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;