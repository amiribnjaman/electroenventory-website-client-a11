import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(true)
    // const [netErr, setNetErr] = useState('')

    console.log(items);

    useEffect(() => {
        fetch('http://localhost:4000/allInventory')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setSpinner(false)
            })
    }, [items])

    // Show loading error message when internet issue occur
    // setTimeout(() => {
    //     if (items.length < 1) {
    //         setNetErr(<div className='text-center mt-12 font-semibold text-black'>
    //             <p>Failed to fetch data. <span className='block'>please check your internet connection :)</span></p>
    //         </div>);
    //         setSpinner(false)
    //     }
    // }, 10000);

    const handleNavigate = (id) => {
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
                                Action
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Action</span>
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr onClick={() => handleNavigate(item._id)} class="border-b cursor-pointer  dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
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
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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
            {/* {netErr && netErr} */}

        </div>
    );
};

export default ManageInventories;