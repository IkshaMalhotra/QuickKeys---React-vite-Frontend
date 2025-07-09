import React from 'react'
import assets from '../assets/assets';
import { Link } from 'react-router-dom';

const CarCards = ({ car }) => {
    return (
        <Link to={`/car-details/${car.id}`} className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
            <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {car.available ? 'Available Now' : 'Not Available'}
                </span>
                <span className="absolute bottom-2 right-2 bg-black text-white text-sm px-3 py-1 rounded">
                    {car.pricePerDay}
                </span>
            </div>
           
            <div className='mt-4 px-5 mb-3 grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600'>
                <div className='flex items-center text-sm text-muted-foreground'>
                    <img src={assets.users_icon} alt="" className='h-4 mr-2' />
                    <span>{car.seats}</span>
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                    <img src={assets.fuel_icon} alt="" className='h-4 mr-2' />
                    <span>{car.fuel}</span>
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                    <img src={assets.car_icon} alt="" className='h-4 mr-2' />
                    <span>{car.transmission}</span>
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                    <img src={assets.location_icon} alt="" className='h-4 mr-2' />
                    <span>{car.location}</span>
                </div>
            </div>
</Link>
    )
}

export default CarCards
