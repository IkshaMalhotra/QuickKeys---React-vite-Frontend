import React from 'react'
import assets from '../assets/assets'

const Banner = () => {
    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-200 text-white p-8 md:p-12 rounded-4xl shadow-lg max-w-6xl mx-auto my-12 ">
            <div className="max-w-md space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">Do You Own a Luxury Car?</h1>
                <p className="text-sm md:text-base font-light leading-relaxed">
                    Monetize your vehicle effortlessly by listing it on QuickKeys.
                    We take care of insurance, driver verification and secure payments — so
                    you can earn passive income, stress-free.
                </p>
                <button className="mt-4 px-5 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition" >
                    List your car
                </button>
            </div>
            <div className="hidden md:block w-1/2">
                <img src={assets.banner_car_image} alt="Luxury Car Banner" className="w-full object-contain" />
            </div>
        </div>

    )
}

export default Banner
