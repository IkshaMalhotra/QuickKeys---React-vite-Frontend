import React from 'react'
import assets from '../assets/assets'
import { carList } from '../assets/assets';
import CarCards from '../components/CarCards';

const Cars = () => {
  const [input, setInput] = React.useState('');

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20 px-4 md:px-8 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Available Cars</h2>
      <p className="text-gray-500 text-center mb-8">
        Browse our selection of premium vehicles available for your next adventure
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-30 relative">
        <input onChange={(e) => setInput(e.target.value)} value={input}
          type="text"
          placeholder="Search by make, model, or features"
          className="w-full px-6 py-3 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <img
          src={assets.search_icon}
          alt="Search"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {carList.map((car) => (
            <CarCards key={car.id} car={car} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Cars
