import React, { useEffect, useState } from 'react';
import LoginVector from '../../../Assets/Img/login.jpg'
import './Login.css';
import UserVector from '../../../Assets/Img/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Assets/Img/Glogo.png'
import useFirebase from '../../hooks/useFirebase/useFirebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {
    const navigate = useNavigate()
    const { handleSingninWithGoogle, error } = useFirebase()
    const [passwordShow, setPasswordShow] = useState(false)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const [customLoginError, setCustomLoginError] = useState('')

    const [userEmail, setuserEmail] = useState({
        email: '',
        error: ''
    })
    const [userPassword, setuserPassword] = useState({
        password: '',
        error: ''
    })

    const [requiredErrors, setRequiredErrors] = useState('')

    // Handle go back to home
    const handleGoBack = () => {
        navigate('/')
    }

    // handle login email onchange
    const handleUserEmailBlur = e => {
        const email = e.target.value
        if (email) {
            setuserEmail({ email: email })
        } else {
            setuserEmail({ error: <p className='text-[13px] text-white shadow bg-blue-600 rounded-full pl-3 mt-1 font-semibold'>Please provide your email</p> })
        }

    }

    // handle login user password
    const handleUserPasswordBlur = e => {
        const password = e.target.value
        if (password) {
            setuserPassword({ password: password })
        } else {
            setuserPassword({ error: <p className='text-[13px] text-white shadow bg-blue-600 rounded-full pl-3 mt-1 font-semibold'>Please provide your password.</p> })
        }
    }

    // Handle login form
    const handleLoginForm = e => {
        e.preventDefault()
        if (userEmail.email && userPassword.password) {
            setRequiredErrors('')
            signInWithEmailAndPassword(userEmail.email, userPassword.password)
        } else {
            setRequiredErrors(<p className='text-[13px] text-white my-3 shadow bg-blue-600 rounded-full text-center font-semibold'>Please provide valid Email and password.</p>)
        }
    }

    if (user) {
        navigate('/')
    }

    useEffect(() => {
        if (loginError?.code === 'auth/user-not-found') {
            setCustomLoginError(<p className='text-[13px] text-white my-3 shadow bg-blue-600 rounded-full text-center font-semibold'>Email or password is Invalid. Please try again.</p>)
        }
    }, [loginError?.code])


    return (
        <>
            <div className='shadow-xl shadow-[rgb(132,179,223)] mt-14 mb-10 w-10/12 mx-auto md:flex'>
                <div className='login-vector w-1/2 relative'>
                    <button className='absolute top-0 left-0 py-1 px-2 text-[#0070DC]' onClick={handleGoBack}>
                        <FontAwesomeIcon icon={faLeftLong} /> <span className=''>Back</span>
                    </button>
                    <img src={LoginVector} alt='' />
                </div>
                <div className='w-1/2 pt-16 bg-[#0070DC]'>
                    <div className='w-9/12 mx-auto '>
                        <form className='mt-4' onSubmit={handleLoginForm}>
                            <div className='user-vector w-[70px] h-[70px] mx-auto mb-2'>
                                <img className='w-full h-full rounded-full' src={UserVector} alt="" />
                            </div>
                            {
                                error || loginError ?
                                    <p className='text-[13px] text-white my-2 shadow bg-blue-600 rounded-full text-center font-semibold'>{error || loginError ? 'Something wrong. Please try again!' : ''}</p> : ''
                            }
                            {customLoginError && customLoginError}
                            <div class="mb-4 mt-1">
                                <input
                                    onBlur={handleUserEmailBlur}
                                    type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required="" />
                                {userEmail.error && userEmail.error}
                            </div>
                            <div class="mb-4 relative">
                                <input
                                    onBlur={handleUserPasswordBlur}
                                    type={!passwordShow ? 'password' : 'text'} id="password" class="bg-gray-50 rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" placeholder='Your Password' />
                                <div onClick={() => setPasswordShow(!passwordShow)} className='absolute top-2 right-5 cursor-pointer text-slate-400'>
                                    {!passwordShow ? <FontAwesomeIcon title='Show password' icon={faEye} />
                                        : <FontAwesomeIcon title='Hide password' icon={faEyeSlash} />
                                    }
                                </div>
                                {userPassword.error && userPassword.error}
                            </div>
                            {requiredErrors && requiredErrors}
                            <div className=''>
                                <button type="submit" class="text-slate-800 mx-auto block hover:bg-[#f8b705] focus:ring-4 bg-[#FFC21F] focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-16 py-2.5 text-center ">Login</button>
                            </div>
                        </form>

                        <h6 className='text-center my-3 text-white font-semibold text-[14px]'>Haven't account? <Link to='/signup' className='underline text-[#FFC21F]'>Sign up</Link></h6>

                        <div className='flex my-2 items-center justify-center mx-auto w-11/12'>
                            <div className='w-1/3 mt-1 h-[1px] bg-white text-center'></div>
                            <div className='px-2 text-white'>or</div>
                            <div className='w-1/3 mt-1 h-[1px] bg-white'></div>
                        </div>

                        <div
                            onClick={handleSingninWithGoogle}
                            className='bg-white flex items-center py-1 cursor-pointer shadow-md shadow-blue-400 justify-around w-11/12 px-10 mx-auto rounded-full'>
                            <img width='35px' src={GoogleLogo} alt="" /> <span className='text-slate-800 font-semibold'>Sign in with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;