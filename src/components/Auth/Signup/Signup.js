import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupVector from '../../../Assets/Img/signup.jpg'
import UserVector from '../../../Assets/Img/user1.png'

const Signup = () => {
    const navigate =  useNavigate()

    // Handle go back to home
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <div className='shadow-xl shadow-[rgb(132,179,223)] mt-14 mb-10 w-10/12 mx-auto md:flex'>
            <div className='login-vector w-1/2 relative'>
                <button className='absolute top-0 left-0 py-1 px-2 text-[#0070DC]' onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faLeftLong} /> <span className=''>Back</span>
                </button>
                <img src={SignupVector} alt='' />
            </div>
            <div className='w-1/2 bg-[#0070DC]'>
                <div className='w-9/12 mx-auto '>
                    <form className='mt-8'>
                        <div className='user-vector w-[70px] h-[70px] mx-auto mb-5'>
                            <img className='w-full h-full rounded-full' src={UserVector} alt="" />
                        </div>
                        <form>
                            <div class="mb-4">
                                <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required="" />
                            </div>
                            <div class="mb-4">
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email address" required="" />
                            </div>
                            <div class="mb-4">
                                <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required="" />
                            </div>
                            <div class="mb-4">

                                <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" placeholder='Confirm Password'/>
                            </div>
                            <div className=''>
                                <button type="submit" class="text-slate-800 mx-auto block hover:bg-[#f8b705] focus:ring-4 bg-[#FFC21F] focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center ">Sign up</button>
                            </div>

                        </form>


                    </form>
                    <h6 className='text-center mt-3 text-white font-semibold text-[14px]'>Already Registered? <Link to='/login' className='underline text-[#FFC21F]'>Login</Link></h6>
                </div>
            </div>
        </div>
    );
};

export default Signup;