import { faStore, faTruckPickup, faWarehouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Specialties.css';

const Specialties = () => {
    return (
        <div className='offer-section bg-[#f3f6fa] py-20 mb-10 flex items-center'>
            <div className='w-10/12 mx-auto text-white flex'>
                <div className='w-2/6 flex flex-col justify-center'>
                <h2 className='text-left font-semibold text-3xl'>What we Offer</h2>
                <p className='text-left font-semibold text-[13px]'>Here are some services that we offer to our cilents.</p>
                </div>
                <div className='relative border-l border-gray-200 w-4/6 mt-8 grid md:grid-cols-3 gap-6 '>
                    <div className='ml-2 text-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faWarehouse} />
                        <h4 className='text-lg font-semibold'>Stock Management</h4>
                        <p className='text-[14px]'>We offer our client the best way to stock their product.</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faTruckPickup} />
                        <h4 className='text-lg font-semibold'>Delivered Product</h4>
                        <p className='text-[14px]'>You can deliverd your product via electro inventory.</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faSuitcase} />
                        <h4 className='text-lg font-semibold'>Packing</h4>
                        <p className='text-[14px]'>For deliverd product to client, we offer packing the product as you wish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialties;