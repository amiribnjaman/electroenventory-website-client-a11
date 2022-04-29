import React from 'react';
import banner from '../../../Assets/Img/banner.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section'>
            <img src={banner} alt="" />
            <div className='banner-text'>
                <h1 className='text-4xl font-bold text-center'>Find & Manage your products</h1>
                <div className='w-2/3 mx-auto text-center'>
                    <h6 className='font-semibold'>with Your beloved<span className='text-[#fc9c20]'> Electro Inventory</span></h6>
                    <p className='text-slate-700 font-semibold text-sm mt-2'>This is a Product Inventory or wirehouse website. Her you can add, delete and manage your product simply. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;