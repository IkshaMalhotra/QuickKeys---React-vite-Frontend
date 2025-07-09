import React from 'react'
import assets from '../assets/assets'
import { carList } from '../assets/assets';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = React.useState()
  const today = new Date().toISOString().split('T')[0];
  const handleSubmit = async(e) => {
    e.preventDefault();}

  React.useEffect(() => {
    setCar(carList.find(car => car.id === parseInt(id)))
  }, [id])

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center text-gray-500">
        Loading car details...
      </div>
    );
  }

  return (

    <div className="max-w-5xl mx-auto px-8 py-10 flex flex-col">
      <button onClick={() => navigate(-1)} className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />

          <div className="mt-6">
            <h1 className="text-3xl font-semibold">{car.name}</h1>
            <p className="text-gray-500 mt-1">{car.type} • {car.year}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-gray-100 px-6 py-3 rounded-xl text-sm"> <img src={assets.users_icon} alt="" /> {car.seats}</div>
            <div className="bg-gray-100 px-6 py-3 rounded-xl text-sm"> <img src={assets.fuel_icon} alt="" /> {car.fuel}</div>
            <div className="bg-gray-100 px-6 py-3 rounded-xl text-sm"> <img src={assets.car_icon} alt="" /> {car.transmission}</div>
            <div className="bg-gray-100 px-6 py-3 rounded-xl text-sm"> <img src={assets.location_icon} alt="" /> {car.location}</div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{car.description}</p>
          </div>

          <div className="mt-6 mb-10">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-700">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src={assets.check_icon} alt="Check" className="w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-xl border sticky top-18 border-gray-100 h-max">
          <h2 className="text-2xl font-semibold">{car.pricePerDay}</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Pickup Date</label>
              <input type="date" min={today} className="w-full px-3 py-2 border rounded-md focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Return Date</label>
              <input type="date" min={today} className="w-full px-3 py-2 border rounded-md focus:outline-none" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Book Now
            </button>
            <p className="text-xs text-gray-400 text-center">No credit card required to reserve</p>
          </div>
        </form>
      </div>

    </div>
  ); <p>Loading...</p>
}

export default CarDetails
