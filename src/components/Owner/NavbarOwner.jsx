import React from 'react'
import { dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import assets from '../../assets/assets'
import { Menu } from 'lucide-react'

const NavbarOwner = ({ toggleSidebar }) => {
    const user = dummyUserData;

    return (
        <header className="bg-white shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <button className="md:hidden" onClick={toggleSidebar}>
                    <Menu className="w-6 h-6" />
                </button>

                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
                </Link>

                <p className="text-sm md:text-base font-medium text-gray-700">Welcome, {user.name || "owner"}</p>
            </div>
        </header>

    );
};

export default NavbarOwner
