import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div
      className="w-[18%] min-h-screen border-r"
      style={{ backgroundColor: '#0F0F0F', borderColor: '#2A2A2A', fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l transition-all duration-300 hover:bg-[#FF8787]/20 ${
              isActive ? 'bg-[#1C1C1E] border-[#FF6B6B]' : 'border-[#2A2A2A]'
            }`
          }
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Items" />
          <p className="hidden md:block" style={{ color: '#EAEAEA' }}>
            Add Items
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l transition-all duration-300 hover:bg-[#FF8787]/20 ${
              isActive ? 'bg-[#1C1C1E] border-[#FF6B6B]' : 'border-[#2A2A2A]'
            }`
          }
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
          <p className="hidden md:block" style={{ color: '#EAEAEA' }}>
            List Items
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l transition-all duration-300 hover:bg-[#FF8787]/20 ${
              isActive ? 'bg-[#1C1C1E] border-[#FF6B6B]' : 'border-[#2A2A2A]'
            }`
          }
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
          <p className="hidden md:block" style={{ color: '#EAEAEA' }}>
            Orders
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;