import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactUs = () => {
    return (
        <div className='w-9/12 mx-auto my-16 md:my-20 md:flex gap-12'>
            <div className='md:w-2/5'>
                <div>
                    <h2 className='text-xl font-semibold'>You can message us any time.</h2>
                    <p className='text-[12px] md:text-[14px] mt-4 mb-3 font-semibold'>For any enquery you can messge or call us any time. We will try to response as soon as possible. Our customer care operator is 24/7 ready to help you. If delay any time for unexpected reson please wait a moment. </p>
                </div>
                <div>
                    <div className='flex bg-gray-100 py-2 rounded mb-3 px-4'>
                        <FontAwesomeIcon className='mt-1 text-2xl text-[#FFC21F]' icon={faLocation} />
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
                </div>
            </div>

            <div className='md:w-3/5 mt-12 md:mt-0'>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <textarea type="textarea" name="message" id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;