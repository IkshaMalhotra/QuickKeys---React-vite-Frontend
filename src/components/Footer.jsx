import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
   const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <Link to='/'  className="flex items-center space-x-3 mb-6" onClick={handleLogoClick}>
          <img alt="" className="h-11"
            src={assets.logo} />
        </Link>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
        </p>

        <div className="flex space-x-5 my-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={assets.twitter} alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
        </div>

        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            QuickKeys ©2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
