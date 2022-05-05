import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import forgotVector from '../../../Assets/Img/D_security01.jpg'
import user from '../../../Assets/Img/user.png'

const ForgotPassword = () => {

    // Hanld go back using javascirpt history api
    const handleGoBack = () => {
        window.history.go(-1)
    }

    return (
        <div>
            <div className='shadow-xl h-96 shadow-[rgb(132,179,223)] md:mt-32 mt-20 mb-10 w-10/12 mx-auto md:flex'>
                <div className='login-vector hidden h-60 md:block md:w-1/2 relative'>
                    <button
                        onClick={handleGoBack}
                        className='absolute top-0 font-semibold left-0 py-1 px-2 text-white' >
                        <FontAwesomeIcon icon={faLeftLong} /> <span className=''>Back</span>
                    </button>
                    <img className=' h-96 w-full' src={forgotVector} alt='' />
                </div>
                <div className='md:w-1/2 md:pt-16 flex items-center py-10 bg-white'>
                    <div className='w-9/12 mx-auto '>
                        <form className=''>
                            <div className='user-vector w-[70px] h-[70px] mx-auto mb-2'>
                                <img className='w-full h-full rounded-full' src={user} alt="" />
                            </div>
                            <div class="mb-4 mt-1">
                                <input
                                    type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required="" />
                            </div>
                            <div className=''>
                                <button type="submit" class=" mx-auto block hover:bg-blue-600 focus:ring-4 bg-blue-500 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center ">Send</button>
                            </div>

                        </form>

                        <div className='flex my-2 items-center justify-center mx-auto w-11/12'>
                            <div className='w-1/3 mt-1 h-[1px] bg-white text-center'></div>
                            <div className='px-2 text-white'>or</div>
                            <div className='w-1/3 mt-1 h-[1px] bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;