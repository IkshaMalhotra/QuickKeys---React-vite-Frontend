import React from 'react'
import CarCards from './CarCards';
import { carList } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const FeaturedSection = () => {
    const navigate = useNavigate();
    return (
        <div className="py-16 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Vehicles</h2>
            <p className="text-gray-600 mb-10">Explore our selection of premium vehicles available for your next adventure.</p>


            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {carList.slice(0, 6).map((car) => (
                        <CarCards key={car.id} car={car} />
                    ))}
                </div>
            </div>



            <div onClick={() => { navigate(`/Cars`); scrollTo(0, 0) }} className="mt-10">
                <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
                    Explore all cars →
                </button>
            </div>
        </div>
    );
};

export default FeaturedSection;

