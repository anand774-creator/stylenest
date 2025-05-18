import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div
      className="flex items-center py-1.5 px-[4%] justify-between"
      style={{ backgroundColor: '#0F0F0F', fontFamily: 'Poppins, sans-serif' }}
    >
      <img
        className="w-20 hover:scale-105 transition-transform duration-300"
        src={assets.logo}
        alt="StyleNest Logo"
      />
      <button
        onClick={() => setToken('')}
        className="bg-[#FF6B6B] text-[#EAEAEA] px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#FF8787] transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;