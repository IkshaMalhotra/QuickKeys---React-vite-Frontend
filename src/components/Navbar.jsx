import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets.js'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar({ setShowLogin }) {
    // State to manage the mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    

    // Function to open the mobile menu
    const openMenu = () => setMenuOpen(true);

    // Function to close the mobile menu
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="shadow-md bg-blue-50 px-3 md:px-9 text-gray-500">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
                <Link to="/">
                    <div className="flex items-center">
                        <img src={assets.logo} alt="logo" className="h-10 w-auto" />
                    </div>
                </Link>

                {/* Hamburger menu button for mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center"
                    onClick={openMenu}
                    aria-label="Open menu">
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                </button>

                {/* Desktop menu links */}
                <div className="hidden md:flex items-center space-x-4">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`text-gray-500 hover:text-blue-600 font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600 font-bold' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="relative flex items-center ml-4">
                        <input
                            type="text"
                            placeholder="Search Cars"
                            className="px-4 py-2 pr-10 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                        />
                        <img
                            src={assets.search_icon}
                            alt="Search"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                        />
                    </div>

                    <div>
                        <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard
                        </button>

                        <button
                            className="ml-6 bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition"
                            onClick={() => setShowLogin?.(true)}>
                            Login
                        </button>
                    </div>

                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-5 bg-opacity-40 flex justify-end" style={{ backgroundColor: '#7b7c7e38' }}>
                    <div className="w-3/4 max-w-xs bg-blue-50 h-full px-6 py-6 flex flex-col">
                        <button
                            className="self-end mb-6 text-gray-700"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col space-y-6 flex-1">
                            {menuLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600 font-bold' : ''
                                        }`}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="relative flex items-center mt-4">
                                <input
                                    type="text"
                                    placeholder="Search Cars"
                                    className="w-full px-3 py-2 pr-9 rounded-3xl border border-gray-300"
                                />
                                <img
                                    src={assets.search_icon}
                                    alt="Search"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
                                />
                            </div>

                            <div className="flex flex-col items-start mt-6">
                                <button onClick={() => navigate('/owner')} className='cursor-pointer '>Dashboard
                                </button>
                                <button
                                    className=" mt-4 bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700"
                                    onClick={() => { setShowLogin?.(true); closeMenu(); }}>
                                    Login
                                </button>
                            </div>
                        </div>

                        {/* Click outside to close */}
                        <div className="flex-1" onClick={closeMenu}></div>
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Navbar
