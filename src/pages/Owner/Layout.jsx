import React from 'react'
import NavbarOwner from '../../components/Owner/NavbarOwner'
import Sidebar from '../../components/Owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    return (
        <div className='flex flex-col min-h-screen'>
            <NavbarOwner toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
            <div className='flex flex-1'>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}


export default Layout
