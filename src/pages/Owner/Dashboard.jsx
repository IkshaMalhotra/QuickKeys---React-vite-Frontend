import React, { useEffect } from 'react'
import assets from '../../assets/assets'
import { dummyDashboardData } from '../../assets/assets'
import Title from '../../components/Owner/Title'

const Dashboard = () => {
  const [data, setData] = React.useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  })

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored }
  ]


  useEffect(() => {
    setData(dummyDashboardData)
  }, [])


  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title title='Admin Dashboard' subTitle='Monitor overall platform performance including total cars, bookings, revenue, and recent activities' />

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>
        {dashboardCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={card.icon} alt=" " className="w-8 h-8 mb-2" />
            <div className="text-lg font-semibold">{card.value}</div>
            <div className="text-sm text-gray-500">{card.title}</div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mb-8">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-sm text-gray-500 mb-1">Monthly Revenue</div>
          <div className="text-2xl font-bold text-blue-600">₹{data.monthlyRevenue}</div>
        </div>
      </div>

      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
        <div className='p-4 md:p-6 border border-b-black rounded-md mx-w-lg w-full'>
          <h1 className='text-lg font-medium'>Recent Bookings</h1>
          <p className='text-gray-500'>Latest Customer Bookings</p>
          {data.recentBookings.map((booking, idx) => (
            <div key={idx} className="border-b py-2">
              <div className="font-medium">{booking.customerName || "Customer"}</div>
              <div className="text-sm text-gray-500">Status: {booking.status || "N/A"}</div>
              <div className="text-sm text-gray-500">Car: {booking.car?.name || "N/A"}</div>
              <div className="text-sm text-gray-500">Created At: {booking.createdAt || "N/A"}</div>
              <div className="text-sm text-gray-500">Price: {booking.price ? `₹${booking.price}` : "N/A"}</div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Dashboard
