import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="bg-[#0F0F0F] text-center py-4 mt-20">
      <div className="inline-flex items-center justify-center bg-[#1C1C1E] border border-[#2A2A2A] px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 shadow-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-[#EAEAEA] placeholder-[#9E9E9E] outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300 text-sm font-sans"
          type="text"
          placeholder="Search"
          required
        />
        <svg
          className="w-4 h-4 text-[#EAEAEA] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      <svg
        onClick={() => setShowSearch(false)}
        className="inline w-3 h-3 cursor-pointer text-[#EAEAEA] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </div>
  ) : null;
};

export default SearchBar;