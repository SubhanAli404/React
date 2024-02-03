import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header(){
    return (
        <header className=" sticky z-50 top-0 px-60 bg-white" >
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className=" items-center">
                        <img
                            src="https://formease.app/images/logo.png"
                            className="mr-3 h-8"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                    <input type="text" className='h-6 rounded-2xl  p-4 w-72 border border-[#246BFD] sp' placeholder="Search Exam Here"/>
                      
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                         <ul className="flex flex-col mt-4  font-medium   lg:flex-row lg:space-x-8 lg:mt-0" style={{fontFamily:"sans-serif"}}>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        ` block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-[#246bfd]" : "text-black" } lg:hover:bg-transparent lg:border-0 hover:text-[#246bfd] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Exam"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-[#246bfd]" : "text-black" } lg:hover:bg-transparent lg:border-0 hover:text-[#246bfd] lg:p-0`
                                    }
                                >
                                    Exam
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/FAQ"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-[#246bfd]" : "text-black" } lg:hover:bg-transparent lg:border-0 hover:text-[#246bfd] lg:p-0`
                                    }
                                >
                                 FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About_Us"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-[#246bfd]" : "text-black" } lg:hover:bg-transparent lg:border-0 hover:text-[#246bfd] lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact_Us"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-[#246bfd]" : "text-black" } lg:hover:bg-transparent lg:border-0 hover:text-[#246bfd] lg:p-0`
                                    }
                                >
                                 Contact Us
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
             <hr className=' w-full absolute border-gray-300  left-0' />
        </header>
    );
}

export default Header