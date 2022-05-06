import {  faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className='py-24 w-4/5 mx-auto'>
            <div className='text-center'>
                <p className='text-sm'>For secure and fast product warehouse you can stay with electro inventory </p>
                <h2 className='text-[28px] font-semibold'>You can find out and contact with us</h2>
            </div>
            <div className='grid grid-cols-3 md:ml-12 gap-6 mt-12'>
                <div className='flex'>
                    <FontAwesomeIcon className='mt-1 text-4xl text-[#FFC21F]' icon={faMap} />
                    <div className=' ml-4'>
                        <h5 className='text-xl font-semibold'>Address</h5>
                        <p>1222, Manik mia Avineu, </p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='flex'>
                    <FontAwesomeIcon className='mt-1 text-4xl text-[#FFC21F]' icon={faPhone} />
                    <div className=' ml-4'>
                        <h5 className='text-xl font-semibold'>Phone</h5>
                        <p>01888888888</p>
                        <p>01777777777</p>
                    </div>
                </div>
                <div className='flex'>
                    <FontAwesomeIcon className='mt-1 text-4xl text-[#FFC21F]' icon={faEnvelope} />
                    <div className=' ml-4'>
                        <h5 className='text-xl font-semibold'>Email</h5>
                        <p>electroinventory@gmail.com</p>
                        <p>mail@electrointentory.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;