import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupVector from '../../../Assets/Img/signup.jpg'
import UserVector from '../../../Assets/Img/user1.png'
import GoogleLogo from '../../../Assets/Img/Glogo.png'
import useFirebase from '../../hooks/useFirebase/useFirebase';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import auth from '../../../firebase.init'

const Signup = () => {
    let customErr;
    const navigate = useNavigate()
    const {
        handleSingninWithGoogle,
        error } = useFirebase()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signupError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    // Handle go back to home
    const handleGoBack = () => {
        navigate('/')
    }

    const [userName, setUserName] = useState({ name: '', error: '' })
    const [userEmail, setUserEmail] = useState({ email: '', error: '' })
    const [userPassword, setUserPassword] = useState({ password: '', error: '' })
    const [userConfirmPassword, setUserConfirmPassword] = useState({ confirmPassword: '', error: '' })
    const [erros, setErrors] = useState('')

    // handle user name on change
    const handleNameBlur = e => {
        const name = e.target.value
        if (name) {
            setUserName({ name: name })
        } else {
            setUserName({ error: <p className='text-[13px] text-white py-1 mb-1 shadow bg-blue-600 rounded-full pl-3  font-semibold'>Please provide your name here</p> })
        }

    }

    // handle user email on change
    const handleEmailBlur = e => {
        const email = e.target.value
        const emailRegex = /\S+@\S+\.\S+/;
        const emailValidation = emailRegex.test(email)
        if (emailValidation) {
            setUserEmail({ email: email })
        } else {
            setUserEmail({ error: <p className='text-[13px] text-white py-1 mb-1 shadow pl-3  bg-blue-600 rounded-full  font-semibold'>Please provide a valid email address.</p> })
        }

    }

    // handle user password on change
    const handlePasswordBlur = e => {
        const password = e.target.value
        if (password.length >= 8) {
            setUserPassword({ password: password })
        } else {
            setUserPassword({ error: <p className='text-[13px] text-white py-1 mb-1 shadow pl-3 bg-blue-600 rounded-full  font-semibold'>Password is too short</p> })
        }
    }

    // handle user confirm password on change
    const handleConfirmPasswordBlur = e => {
        const confirmPassword = e.target.value
        if (userPassword.password === confirmPassword) {
            setUserConfirmPassword({ confirmPassword: confirmPassword })
        } else {
            setUserConfirmPassword({ error: <p className='text-[13px] text-white py-1 mb-1 shadow pl-3 bg-blue-600 rounded-full font-semibold'>Confirm password dosen't matched.</p> })
        }
    }

    // Handle sign up
    const handleSignupForm = async e => {
        e.preventDefault()

        try {
            if (userName.name && userEmail.email && userPassword.password && userConfirmPassword.confirmPassword) {
                await createUserWithEmailAndPassword(userEmail.email, userPassword.password)
                await updateProfile(auth.currentUser, { displayName: userName.name });
                setErrors('')
            } else {
                setErrors(<p className='text-[13px] text-white shadow mb-2 bg-blue-600 rounded-full text-center font-semibold'>Please fill up all required fields.</p>)
            }
        }
        catch (errro) {
            console.log(error);
        }

    }

    if (user) {
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
            <div className='w-1/2 pt-8 pb-14 bg-[#0070DC]'>
                <div className='w-9/12 mx-auto '>
                    <form onSubmit={handleSignupForm}>
                        <div className='user-vector w-[70px] h-[70px] mx-auto mb-3'>
                            <img className='w-full h-full rounded-full' src={UserVector} alt="" />
                        </div>
                        <p className='text-sm text-white py-1 mb-1 shadow bg-blue-600 rounded-full text-center font-semibold'>{error && 'Something wrong. Please try agin!'}</p>
                        <div class="mb-3">
                            <input
                                onBlur={handleNameBlur} type="text" id="text" name='name' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name*" required="" />
                            {userName?.error && userName?.error}
                        </div>
                        <div class="mb-3">
                            <input
                                onBlur={handleEmailBlur}
                                type="email" id="email" name='email' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email*" required="" />
                            {userEmail?.error && userEmail?.error}
                        </div>
                        <div class="mb-3">
                            <input
                                onBlur={handlePasswordBlur}
                                type="password" name='password' id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password*' required="" />
                            {userPassword?.error && userPassword?.error}
                        </div>
                        <div class="mb-5">
                            <input
                                onBlur={handleConfirmPasswordBlur}
                                type="password" name='confirmPassword' id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" placeholder='Confirm Password*' />
                            {userConfirmPassword?.error && userConfirmPassword?.error}
                        </div>
                        {erros && erros}
                        <div className=''>
                            <input type="submit" className={`text-slate-800 mx-auto block cursor-pointer hover:bg-[#f8b705] focus:ring-4 bg-[#FFC21F] focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center`} value='Sign up' />
                        </div>
                    </form>

                    <h6 className='text-center mt-3 text-white font-semibold text-[14px]'>Already Registered? <Link to='/login' className='underline text-[#FFC21F]'>Login</Link></h6>

                    <div className='flex my-2 items-center justify-center mx-auto w-11/12'>
                        <div className='w-1/3 mt-1 h-[1px] bg-white text-center'></div>
                        <div className='px-2 text-white'>or</div>
                        <div className='w-1/3 mt-1 h-[1px] bg-white'></div>
                    </div>
                    <div
                        onClick={handleSingninWithGoogle}
                        className='bg-white cursor-pointer flex items-center py-1 shadow-md shadow-blue-400 justify-around w-11/12 px-10 mx-auto rounded-full'>
                        <img width='35px' src={GoogleLogo} alt="" /> <span className='text-slate-800 font-semibold'>Sign in with Google</span>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Signup;