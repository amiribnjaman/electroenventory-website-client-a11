import React from 'react';
import NotFoundImg from '../../Assets/Img/404.gif'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    // Handle go home button
    const handleGoHome = () => {
        navigate('/')
    }
    return (
        <div className='text-center mx-auto w-2/4 mb-4'>
            <img className='m-0' src={NotFoundImg} alt="" />
            <button
                onClick={handleGoHome}
                type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Go Home</button>
        </div>
    );
};

export default NotFound;