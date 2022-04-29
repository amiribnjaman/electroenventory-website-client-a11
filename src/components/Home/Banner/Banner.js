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
                    <h6 className='font-semibold'>with Your beloved<span className='text-[#FFC21F]'> Electro Inventory</span></h6>
                    <p className='text-slate-700 font-semibold text-sm mt-2'>This is a Product Inventory or warehouse website. Here you can add, delete and manage your products simply. </p>
                    <button type="button" class="text-white mt-5 bg-[#0070DC] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 focus:outline-none">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;