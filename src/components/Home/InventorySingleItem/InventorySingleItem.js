import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../../Assets/Img/card-laptop.jpg'

const InventorySingleItem = () => {
    return (
        <div>
            <div class="p-3 max-w-sm bg-white rounded-lg hover:border hover:border-slate-100 hover:shadow-md">
                <img src={cardImg} alt="" />
                <div className='md:px-1'>
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

                    <p class="mb-3 font-normal text-[15px] text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to='' class="inline-flex items-center py-2 text-center px-5 text-sm font-medium text-black border border-slate-800 hover:text-white rounded-lg hover:bg-[#0070DC] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Update
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventorySingleItem;