import React from 'react'
import Title from '../../components/Owner/Title'
import assets, { carList } from '../../assets/assets';

const ManageCars = () => {

  const [cars, setCars] = React.useState([])
  const fetchOwnerCars = async () => {
    setCars(carList)
  };

  React.useEffect(() => {
    fetchOwnerCars();
  }, []);

  return (
    <div className='px-4 pt-10 md:px-10 w-full mb-50'>

      <Title title='Manage Cars' subTitle='View all listed cars, update their details, or remove them from the booking platform' />

      <div className='max-w-3x1 w-full rounded-md overflow-hidden border border-black mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-500'>
          <thead className='text-gray-600'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Type</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium max-md:hidden'>Status</th>
              <th className='p-3 font-medium'>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, idx) => (
              <tr key={idx} className='border-t border-black'>
                <td className='p-3 flex items-center gap-3'>
                  <img src={car.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'> {car.name} {car.type}</p>
                    <p className='font-medium'> {car.seats} {car.transmission}</p>
                  </div>
                </td>

                <td className='p-3 max-md-hidden'>{car.type}
                </td>
                <td className='p-3'>{car.pricePerDay}
                </td>
                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${car.available ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {car.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                <td className='p-3 flex items-center'>
                  <img src={car.available ? assets.eye_close_icon : assets.eye_icon} alt="" className='cursor-pointer' />
                  <img src={assets.delete_icon} alt="" className='cursor-pointer' />
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ManageCars
