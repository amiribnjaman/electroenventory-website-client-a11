import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const MainNavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [showMobileMenu, setShowMobileMenu] = useState(false)


    return (
        <div className='bg-[#FFC21F] py-3 mt-4'>
            <nav className="w-10/12 mx-auto border-gray-200 px-2 py-4 sm:px-4 rounded">
                <div className="container flex flex-wrap justify-end md:mr-6 items-center ml-auto">
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-[#f4c030] focus:outline-none  " aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${showMobileMenu ? 'block' : 'hidden'} w-full items-center justify-end md:flex md:w-auto" id="mobile-menu`}>
                        <div>
                            <ul className="flex flex-col mt-4 md:flex-row items-center md:space-x-8 md:mt-0 md:text-[13px] md:font-medium uppercase">
                                <li>
                                    <Link to="/" className="block py-1 md:py-2 pr-4 pl-3 text-[#041E42]  rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</Link>
                                </li>
                                {user?.email ?
                                    <>
                                        <li>
                                            <Link to="/manageinventories" className="block py-1 md:py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Manage Inventories</Link>
                                        </li>
                                        <li>
                                            <Link to="/addinventory" className="block py-1 md:py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Add Inventory</Link>
                                        </li>
                                        <li>
                                            <Link to="/myitems" className="block py-1 md:py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">My Items</Link>
                                        </li>
                                    </> : ''}
                                <li>
                                    <Link to="/blogs" className="block py-1 md:py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="block py-1 md:py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='ml-4 lg:w-[270px] md:w-[190px]'>
                            <ul>
                                <li>
                                    <form className="flex items-center">
                                        <div className="relative w-full">
                                            <div className=" flex items-center pl-3 pointer-events-none">
                                                <button type="submit" className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-3 py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#041E42] rounded-r-lg border border-[#041E42] hover:bg-[#21334b] focus:ring-4 focus:outline-none focus:ring-gray-600 "><svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                            </div>
                                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-500 block w-full pl-6 p-2.5 " placeholder="Search " required="" />
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MainNavBar;