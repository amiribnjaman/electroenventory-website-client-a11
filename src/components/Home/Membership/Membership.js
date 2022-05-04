import React from 'react';

const Membership = () => {
    return (
        <div className='bg-[#041E42]'>
            <div className="grid md:w-10/12 mx-auto gap-8 py-20 px-6">
                <div className='text-white text-center'>
                    <h2 className='text-2xl font-semibold'>Get premium Membership</h2>
                    <p className='text-[13px] md:w-2/3 w-5/6 mx-auto'>By getting our premium Membership, You will obtain few extra features and you can Store and manage your products more easy & smoothly.</p>

                    <div class="relative md:w-1/2 mx-auto mt-6">
                        <div class=" flex items-center pl-3 pointer-events-none">
                            <button type="submit" class="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-3 py-3 px-4 ml-2 text-sm font-medium text-black bg-[#FFC21F] rounded-r-lg border border-[#FFC21F] hover:bg-[#21334b] focus:ring-4 focus:outline-none focus:ring-gray-600 ">Submit</button>
                        </div>
                        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-500 block w-full pl-6 p-2.5 " placeholder="Your email " required="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;