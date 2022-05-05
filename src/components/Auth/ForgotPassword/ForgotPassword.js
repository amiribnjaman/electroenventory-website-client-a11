import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import forgotVector from '../../../Assets/Img/D_security01.jpg'
import user from '../../../Assets/Img/user.png'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import { toast, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // Hanld go back using javascirpt history api
    const handleGoBack = () => {
        window.history.go(-1)
    }

    // handle forgot user email onChange 
    // const handleEmailBlur = e => {
    //     const e 
    // }

    // handle forgot password form
    const handleForgotPasswordForm = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(email)
        if (validEmail) {
            await sendPasswordResetEmail(email);
            toast.success('Password reset link sent to your email!', {
                position: "top-center",
                autoClose: 5000,
            });
        } else {
            toast.warn('Please provide a valid email.', {
                position: "top-center",
            })
        }
    }

    return (
        <div>
            <div className='shadow-xl h-96 shadow-[rgb(132,179,223)] md:mt-28 mt-20 mb-10 w-10/12 mx-auto md:flex'>
                <div className='login-vector hidden h-60 md:block md:w-1/2 relative'>
                    <button
                        onClick={handleGoBack}
                        className='absolute top-0 font-semibold left-0 py-1 px-2 text-white' >
                        <FontAwesomeIcon icon={faLeftLong} /> <span className=''>Back</span>
                    </button>
                    <img className=' h-96 w-full' src={forgotVector} alt='' />
                </div>
                <div className='md:w-1/2 md:pt-8 flex items-center py-10 bg-gray-100'>
                    <div className='w-9/12 mx-auto '>
                        <form onSubmit={handleForgotPasswordForm}>
                            <div className='user-vector w-[70px] h-[70px] mx-auto mb-2'>
                                <img className='w-full h-full rounded-full' src={user} alt="" />
                            </div>
                            <div class="mb-4 mt-1">
                                <input type="email" id="email" name='email' class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required="" />
                            </div>
                            <div className=''>
                                <button type="submit" class=" mx-auto block hover:bg-blue-600 focus:ring-4 bg-blue-500 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center ">Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* Toast container */}
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;