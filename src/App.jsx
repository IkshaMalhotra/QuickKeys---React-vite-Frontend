import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Layout from './pages/Owner/Layout'
import Dashboard from './pages/Owner/Dashboard'
import AddCar from './pages/Owner/AddCar'
import ManageCars from './pages/Owner/ManageCars'
import ManageBookings from './pages/Owner/ManageBookings'

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false)
  const location = useLocation()
  const isOwnerDashboard = location.pathname.startsWith('/owner')

  return (
    <>
      <div>
        {showLogin && <Login setShowLogin={setShowLogin} />}
        {!isOwnerDashboard && <Navbar setShowLogin={setShowLogin} />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path='/bookings' element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          </Route>
      </Routes>

      <div>
        {!isOwnerDashboard && <Footer />}
      </div>
    </>
  )
}

export default App
