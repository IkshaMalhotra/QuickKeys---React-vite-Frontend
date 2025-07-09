import React, { useEffect } from 'react'
import { MyBookingsData } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = React.useState([])
  const fetchMyBookings = async () => {
    setBookings(MyBookingsData)
  }

  useEffect(() => {
    fetchMyBookings()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">My Bookings</h2>
      <p className="text-gray-500 mb-8">View and manage your car bookings</p>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{booking.name}</h3>
              <p className="text-gray-600 mb-1">Price: {booking.pricePerDay}</p>
              <p className="text-gray-600 mb-1">Pickup Location: {booking.Location}</p>
              <p className="text-gray-600 mb-1">
                Rental Period: {new Date(booking.pickupDate).toLocaleDateString()} - {new Date(booking.returnDate).toLocaleDateString()}
              </p>
              <p className={`text-sm font-medium ${booking.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </p>
            </div>
            <div className="ml-6 w-32 h-20 rounded overflow-hidden flex-shrink-0">
              <img
                src={booking.car.image}
                alt={booking.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings
