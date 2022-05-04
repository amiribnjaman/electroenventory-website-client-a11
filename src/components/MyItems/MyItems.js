import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    const navigate = useNavigate()
    const [togglePopup, setTogglePopUp] = useState(false)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4000/myItems/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user?.uid, reload])

    // handle item update navigate 
    const handleUpdateItemNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }

    // handle delete popup
    const handleDeleteItemPopup = (id) => {
        setTogglePopUp(!togglePopup)
    }

    // Handle delete item
    const handleDeleteItem = (id) => {
        console.log(id)
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
            {
                myItems.map(item => <div class="p-4 mb-2 w-full text-center bg-white rounded-lg border shadow-md sm:p-8">
                    <div class="relative overflow-x-auto sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr class="bg-white flex items-start">
                                    <th scope="row" class="px-6 w-1/6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td class="px-6 py-4 w-2/6">
                                        {item.description}
                                    </td>
                                    <td class="px-6 py-4 w-1/6">
                                        $ {item.price}
                                    </td>
                                    <td class="px-6 py-4 w-1/6">
                                        {item.quantity} pics
                                    </td>
                                    <td class="px-6 py-4 w-1/6">
                                        {item.spplier_name}
                                    </td>
                                    <td class="px-6 py-4 w-1/6">
                                        <img width={50} src={item.image} alt="" />
                                    </td>
                                    <td class="px-6 py-4 text-left w-1/6">
                                        <button
                                            onClick={() => handleUpdateItemNavigate(item._id)}
                                            class="font-medium text-[18px] text-blue-600 inline-block">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button type="button"
                                            onClick={() => handleDeleteItemPopup(item._id)}
                                            class="font-medium text-[18px] text-red-500 pl-3 inline-block">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>

                                    {/* Confirmation popup */}
                                    <div id="popup-modal" tabindex="-1" className={`${togglePopup ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center`} aria-hidden="true">
                                        <div class="relative p-4 w-full max-w-md h-full mx-auto mt-10 md:h-auto">
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <button
                                                    onClick={handleDeleteItemPopup}
                                                    type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                                <div class="p-6 text-center">
                                                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                                    <button
                                                        onClick={() => handleDeleteItem(item._id)}
                                                        data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                        Yes, I'm sure
                                                    </button>
                                                    <button
                                                        onClick={handleDeleteItemPopup}
                                                        data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>)
            }

        </div >
    );
};

export default MyItems;