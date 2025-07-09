import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import assets from "../../assets/assets";
import { dummyUserData } from "../../assets/assets";
import { ownerMenuLinks } from "../../assets/assets";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const user = dummyUserData;
    const location = useLocation();
    const [image, setImage] = React.useState("");
    const updateImage = () => {
        user.image = URL.createObjectURL(image);
        setImage(user.image); 
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <div className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-white border-r transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

                <div className="p-6 border-b">
                    <label htmlFor="image" className="relative group cursor-pointer">
                        <img className="rounded-full h-9 md:h-14 w-9 md:w-14 mx-auto"
                            src={image ? URL.createObjectURL(image) : user?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"}
                            alt=""
                        />
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            hidden
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                            <img src={assets.edit_icon} alt="" className="w-6 h-6" />
                        </div>
                    </label>
                </div>
                {image && (
                    <button className="absolute top-0 right-0 flex p-2 gap-1 bg-white text-sm cursor-pointer">save <img src={assets.check_icon} width={13} alt="" onClick={updateImage} /></button>
                )}
                <p className="mt-2 text-sm md:text-base text-center mb-2">{user?.name}</p>


                <div className="w-full">
                    {ownerMenuLinks.map((link, index) => (
                        <NavLink key={index} to={link.path} onClick={toggleSidebar} className={` relative flex items-center gap-4 p-4 text-gray-700 hover:bg-gray-100 ${location.pathname === link.path ? "bg-gray-200" : ""}`}>
                            <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="car icon" />
                            <span className="text-sm md:text-base">{link.name}</span>
                            <div className={`$(link.path === location.pathname && 'bg-white') w-1.5 h-8 rounded-1 right-0 absolute`}>

                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}



export default Sidebar