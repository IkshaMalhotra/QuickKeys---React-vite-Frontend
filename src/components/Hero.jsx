import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
    const cityList = assets.pickupLocation || [];
    const [pickupLocation, setPickupLocation] = React.useState("");

    // today's date in YYYY-MM-DD format for min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div className="bg-light min-h-screen pt-24 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Luxury Cars on Rent</h1>

                <form>
                    <div className="bg-white shadow-lg rounded-full flex flex-col md:flex-row items-center justify-center gap-4 px-6 py-4 w-full max-w-3xl mx-auto mb-12">
                        {/* Location Dropdown */}
                        <div>
                            <select required className="text-gray-700 bg-transparent focus:outline-none"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}>
                                <option value="">Pickup Location </option>
                                {cityList.map((city) => (<option key={city} value={city}>
                                    {city}</option>))}
                            </select>
                            <p className='px-1 text-sm flex justify-start text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
                        </div>

                        <div className="hidden md:block border-l h-6 mx-2" />
                        <div className="flex flex-col items-start">
                            <label htmlFor="Pick-up-Date">Pick-up Date</label>
                            <input type="date" min={today} className="text-sm text-gray-500" required />
                        </div>

                        <div className="hidden md:block border-l h-6 mx-2" />
                        <div className="flex flex-col items-start">
                            <label htmlFor="Return-Date">Return Date</label>
                            <input type="date" min={today} className="text-sm text-gray-500" required />
                        </div>                     
                       
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
                            Search
                        </button>

                    </div>
                </form >

                <div className="flex justify-center">
                    <img src={assets.main_car} alt="Luxury Car" className="w-full max-w-4xl" />
                </div>

            </div >
        </>
    )
}

export default Hero
