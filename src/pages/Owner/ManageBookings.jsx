import React from 'react';
import { MyBookingsData } from '../../assets/assets';
import Title from '../../components/Owner/Title';

const ManageBookings = () => {
  const [bookings, setBookings] = React.useState([]);

  const fetchOwnerBookings = () => {
    setBookings(MyBookingsData);
  };

  React.useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className='px-4 pt-10 md:px-10 w-full mb-12'>
      <Title
        title='Manage Bookings'
        subTitle='Track all customer bookings, approve or cancel requests, and manage booking statuses'
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-black mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-500'>
          <thead className='text-gray-600'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Date Range</th>
              <th className='p-3 font-medium'>Total</th>
              <th className='p-3 font-medium max-md:hidden'>Status</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={idx} className='border-t border-black text-gray-500'>
                <td className='p-3 flex items-center gap-3'>
                  <img src={booking.car.image} alt={booking.car.name} className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <p className='font-medium max-md:hidden'>{booking.car.name} {booking.car.type}</p>
                </td>
                <td className='p-3 max-md:hidden'>
                  {booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}
                </td>
                <td className='p-3'>{booking.price}</td>
                <td className='p-3 max-md:hidden'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>offline</span>
                </td>
                <td className='p-3'>
                  {booking.status === 'pending' ? (
                    <select value={booking.status} className='px-2 py-1.5 mt-1 text-gray-500 border border-black rounded-md outline-none'>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="confirmed">Confirmed</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-500'
                      : 'bg-red-100 text-red-500'
                      }`}>
                      {booking.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
