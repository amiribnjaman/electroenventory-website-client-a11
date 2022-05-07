import React from 'react';
import banner from '../../../Assets/Img/banner.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section'>
            <img src={banner} alt="" />
            <div className=' banner-text md:h-auto top-1/2'>
                <h1 className='md:text-3xl text-xl font-bold text-center'>Find & Manage your products</h1>
                <div className='md:w-2/3 mx-auto text-center'>
                    <h6 className='font-semibold text-[16px]'>with Your beloved<span className='text-[#FFC21F]'> Electro Inventory</span></h6>
                    <p className='text-slate-700 font-semibold text-sm mt-2'>This is a Product Inventory or warehouse website. Here you can add, delete and manage your products simply. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;