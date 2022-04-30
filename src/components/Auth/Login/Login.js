import React from 'react';
import LoginVector from '../../../Assets/Img/login.jpg'
import './Login.css';
import UserVector from '../../../Assets/Img/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {

    // Handle go back to home
    const handleGoBack = () => {
        window.history.go(-1)
    }
    return (
        <div className='shadow-xl shadow-[rgb(132,179,223)] mt-14 mb-10 w-10/12 mx-auto md:flex'>
            <div className='login-vector w-1/2 relative'>
                <button className='absolute top-0 left-0 py-1 px-2 text-[#0070DC]' onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faLeftLong} /> <span className=''>Back</span>
                </button>
                <img src={LoginVector} alt='' />
            </div>
            <div className='w-1/2 bg-[#0070DC]'>
                <div className='w-9/12 mx-auto '>
                    <form className='mt-20'>
                        <div className='user-vector w-[70px] h-[70px] mx-auto mb-5'>
                            <img className='w-full h-full rounded-full' src={UserVector} alt="" />
                        </div>
                        <div class="mb-6">
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required="" />
                        </div>
                        <div class="mb-6">
                            <input type="password" id="password" class="bg-gray-50 rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" placeholder='Your Password' />
                        </div>
                        <div className=''>
                            <button type="submit" class="text-slate-800 mx-auto block hover:bg-[#f8b705] focus:ring-4 bg-[#FFC21F] focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center ">Login</button>
                        </div>
                    </form>
                    <h6 className='text-center mt-3 text-white font-semibold'>Haven't account? <Link to='/signup' className='underline text-[#FFC21F]'>Sign up</Link></h6>
                </div>
            </div>
        </div>
    );
};

export default Login;