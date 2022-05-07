import { faArrowRightToBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../Assets/Img/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import useFirebase from '../../../hooks/useFirebase/useFirebase';

const NavBarTop = () => {
    const [user, loading, error] = useAuthState(auth);
    const { handleLogout } = useFirebase()
    const [showUserProfile, setShowUserPorfile] = useState(false)
    return (
        <div>
            <nav className="w-10/12 mx-auto border-gray-200 px-2 py-2 sm:px-4 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className='pt-2 hidden md:block'>
                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 text-md rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                            <svg className="w-7 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className='mt-4'>
                        <Link to="/" className="">
                            <img src={Logo} className=' h-[45px] mx-auto' alt="Flowbite Logo" />
                            <h3 className='logo-text text-[14px] font-semibold text-[#0e0101]'>electro<span className='text-[#fc9c20]'>Inventory</span></h3>
                        </Link>
                    </div>
                    <div className="flex md:block w-auto" id="mobile-menu">
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className='w-14'>
                                {
                                    user?.email ?
                                        <button
                                            onClick={() => setShowUserPorfile(!showUserProfile)}
                                            className="block max-h-10 w-14 py-2 mt-4 pr-4 pl-3 rounded md:bg-transparent text-black md:p-0 dark:text-white" aria-current="page">
                                                
                                            <FontAwesomeIcon className='w-8 ml-1 text-[17px] text-black' icon={faUserAlt} />
                                            <div>
                                                <p className='text-[14px]'>{user?.displayName?.split(' ')[0] || user?.email?.split('@')[0]}</p>
                                            </div>

                                            {/* User profile and logout button */}
                                            <div style={{ marginLeft: '-8px' }} className={`mt-2 w-24  ${showUserProfile ? 'block' : 'hidden'}`}>
                                                <ul className=' h-18 mr-4 rounded mx-auto shadow-lg bg-white'>
                                                    <li className='hover:bg-slate-100 py-[2px]'> <Link to='/profile' >Profile</Link></li>
                                                    <li className='hover:bg-slate-100 py-[2px] pb-[5px]'><button onClick={handleLogout}>Logout</button></li>
                                                </ul>
                                            </div>
                                        </button> :

                                        <Link to="/login" className="block py-2 mt-3 pr-4 pl-3 rounded md:bg-transparent text-black md:p-0 dark:text-white" aria-current="page">
                                            <FontAwesomeIcon className='w-8 ml-1 text-[17px] text-black' icon={faArrowRightToBracket} />
                                            <p className='text-[14px]'>Login</p>
                                        </Link>
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBarTop;