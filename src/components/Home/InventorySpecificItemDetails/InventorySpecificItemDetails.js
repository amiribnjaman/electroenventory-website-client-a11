import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const InventorySpecificItemDetails = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    const { name, image, price, quantity, description, spplier_name } = item
    const id = params?.id
    let [newQuantity, setNewQuantity] = useState(quantity)
    const [isUpdate, setIsupdate] = useState(false)
    const [message, setMessage] = useState('');
    const [spinner, setSpinner] = useState(true)
    const [reStock, setReStock] = useState(0)
    const navigate = useNavigate()

    // Load specific inventory by id
    useEffect(() => {
        fetch(`https://mysterious-dusk-97909.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setSpinner(false)
            })
    }, [id, isUpdate])


    // Handle delivered
    const handleDelivered = () => {
        if (quantity > 0) {
            newQuantity = +(quantity - 1)
            setNewQuantity(String(newQuantity))
            fetch(`https://mysterious-dusk-97909.herokuapp.com/inventory/${id}/${newQuantity}`, {
                method: 'PUT',
            })
                .then(res => res.json)
                .then(data => {
                    setIsupdate(!isUpdate)
                })
        } else {
            setMessage(<p className='text-sm font-semibold mb-2 text-[#d36262] '>Product out of stock</p>)
        }
    }

    // Handle Restock form
    const handleRestockForm = e => {
        e.preventDefault()
        if (reStock > 0) {
            const newQuantity = parseInt(reStock) + parseInt(quantity)
            fetch(`https://mysterious-dusk-97909.herokuapp.com/inventory/${id}/${newQuantity}`, {
                method: 'PUT'
            })
                .then(data => data.json())
                .then(res => {
                    setIsupdate(!isUpdate)
                    e.target.reset()
                })
        }

    }

    // handle restore value onchange 
    const handleRestockChange = e => {
        setReStock(e.target.value)
    }

    // Manage inventories button 
    const manageInvetoriesBtn = () => {
        navigate('/manageInventories')
    }

    return (
        <>
            {
                // Show loading spinner
                spinner ? <div className='text-center pt-10 pb-6'>
                    <svg role="status" className="inline w-10 h-10 mr-2 my-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div> : <div className='md:flex w-5/6 mx-auto shadow my-10 px-4 py-6'>
                    <div className='md:w-1/4 w-3/4 mx-auto'>
                        <img className='w-full' src={image} alt="" />
                    </div>
                    <div className='p-4 md:w-2/4 w-full mt-10'>
                        <ol className="md:relative md:border-l md:border-gray-200">
                            <li className="mb-10 ml-5">
                                <h2 className='font-semibold text-xl'>{name}</h2>
                                <p className="mb-4 pr-14 text-sm font-normal text-gray-700">{description}</p>
                                <div className='mb-5'>
                                    <h5 className='font-semibold'>Price: <span className=' font-bold'>{price} USD</span></h5>
                                    <h5 className='font-semibold my-1'>In stock: <span className=' font-normal'>{quantity > 0 ? quantity + ' pics' : <span className='bg-[#FFEEEE] py-1 px-3 rounded-full text-center w-32 font-light'>Stock out</span>} </span> </h5>
                                    <h5 className='font-semibold '>Diller Name: <span className=' font-light'>{spplier_name}</span> </h5>
                                </div>
                                {message && message}
                                <div>
                                    <button
                                        onClick={handleDelivered}
                                        type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delivered</button>
                                </div>
                            </li>

                        </ol>
                    </div>

                    <div>
                        <form
                            onSubmit={handleRestockForm}
                            className='md:relative md:border-l mt-6 md:mt-4 md:border-gray-200'>
                            <div className='ml-5'>
                                <div className="mb-6">
                                    <h4 className='text-lg font-semibold mb-2'>Restock</h4>
                                    <input
                                        onChange={handleRestockChange}
                                        type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required="" />
                                </div>
                                <button
                                    type="submit" className="text-white hover:bg-[#0070DC] bg-[#037ef0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            }
            {item !== {} ? <div className='md:w-1/4 w-2/4 mx-auto text-center mt-10 mb-10'>
                <button
                    onClick={manageInvetoriesBtn}
                    type="button" className="text-white bg-[#0070DC] hover:bg-[#097be5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Manage Inventories</button>
            </div>
                : ''}

        </>
    );
};

export default InventorySpecificItemDetails;