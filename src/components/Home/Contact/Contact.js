import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate()
    return (
        <div className='md:py-24 py-16 w-10/12 mx-auto md:flex'>
            <div className='text-center md:text-left md:w-2/5 mr-8 flex flex-col justify-center'>
                <h2 className='text-2xl font-semibold'>You can contact with us any time.</h2>
                <p className='text-[13px]'>For secure and fast product warehouse you can stay with electro inventory </p>
                <div className='mt-4'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        type="button" className="text-white bg-[#0070DC] hover:bg-[#097be5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2">Contact Now <FontAwesomeIcon className='ml-2' icon={faEnvelope} /></button>
                </div>

            </div>
            <div className='md:relative md:border-l border-gray-200 md:w-3/5 '>
                <div className='grid grid-cols-1 md:ml-12 mt-8 md:mt-0 gap-2'>
                    <div className='flex bg-gray-100 py-2 rounded px-4'>
                        <FontAwesomeIcon className='mt-1 text-2xl text-[#FFC21F]' icon={faMap} />
                        <div className=' ml-4'>
                            <h5 className='text-lg font-semibold'>Address</h5>
                            <p className='font-semibold text-[14px]'>1222, Manik mia Avineu, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex bg-[#f1f8fd] py-2 rounded px-4'>
                        <FontAwesomeIcon className='mt-1 text-2xl text-[#FFC21F]' icon={faPhone} />
                        <div className=' ml-4'>
                            <h5 className='text-lg font-semibold'>Phone</h5>
                            <p className='font-semibold text-[14px]'>01888888888, 01777777777</p>
                        </div>
                    </div>
                    <div className='flex bg-[#fbf8f7] py-2 rounded px-4'>
                        <FontAwesomeIcon className='mt-1 text-2xl text-[#FFC21F]' icon={faEnvelope} />
                        <div className=' ml-4'>
                            <h5 className='text-lg font-semibold'>Email</h5>
                            <p className='font-semibold text-[14px]'>electroinventory@gmail.com, mail@electrointentory.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;