import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(true)

    const [togglePopup, setTogglePopUp] = useState(false)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/allInventory')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setSpinner(false)
            })
    }, [items, reload])

    // handle navigate to specific inventory item
    const handleUpdateInventory = (id) => {
        navigate(`/inventory/${id}`)
    }

    // handle deleting a specific item from database
    // const handleDeleteInventory = (id) => {
    //     fetch(`http://localhost:4000/inventory/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    // Handle Add new item navigate
    const handleAddItemNavigate = () => {
        navigate('/addinventory')
    }

    // handle delete popup
    const handleDeleteItemPopup = (id) => {
        setTogglePopUp(!togglePopup)
    }

    // Handle delete item
    const handleDeleteItem = (id) => {
        fetch(`http://localhost:4000/inventory/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
                setTogglePopUp(!togglePopup)
            })
    }


    return (
        <div className='w-10/12 mx-auto my-14'>
            <h2 className='text-lg font-semibold mb-2'>Manage Inventories <button
                onClick={handleAddItemNavigate}
                type="button" class="text-white ml-4 bg-[#0070DC] hover:bg-[#097be5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2">Add New Item</button>
            </h2>
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr class="border-b  dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
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
                                <td class="px-6 py-3">
                                    <img width={35} src={item.image} alt="" />
                                </td>
                                <td class="px-6 py-4 text-left">
                                    <button
                                        onClick={() => handleUpdateInventory(item._id)}
                                        class="font-medium text-[18px] text-blue-600 inline-block">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteItemPopup(item._id)}
                                        class="font-medium text-[18px] text-red-500 pl-3 inline-block">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>

                                    {/* Confirmation popup */}
                                    <div id="popup-modal" tabindex="-1" className={`${togglePopup ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center`} aria-hidden="true">
                                        <div class="relative p-4 w-full max-w-md h-full mx-auto mt-10 md:h-auto">
                                            <div class="relative bg-white rounded-lg shadow">
                                                <button
                                                    onClick={handleDeleteItemPopup}
                                                    type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                                <div class="p-6 text-center">
                                                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this item?</h3>
                                                    <button
                                                        onClick={() => handleDeleteItem(item._id)}
                                                        data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                        Yes, I'm sure
                                                    </button>
                                                    <button
                                                        onClick={handleDeleteItemPopup}
                                                        data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {spinner ? <div className='text-center'>
                <svg role="status" class="inline mt-12 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div> : ''}

        </div>
    );
};

export default ManageInventories;