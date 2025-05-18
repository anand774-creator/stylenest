import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  const navLinks = ['/', '/collection', '/about', '/contact'];
  const navNames = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'];

  return (
    <nav
      className="fixed top-0 left-0 w-full flex items-center justify-between py-3 px-6 backdrop-blur-md bg-[#0F0F0F]/80 text-[#EAEAEA] font-medium z-50 transition-all duration-300"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-20" alt="StyleNest Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-6 text-sm">
        {navLinks.map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `relative hover:text-[#FF6B6B] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:bg-[#FF6B6B] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#FF6B6B] after:scale-x-100' : ''
              }`
            }
          >
            {navNames[index]}
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer hover:scale-110 transition-transform"
          aria-label="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer hover:scale-110 transition-transform"
            aria-label="Profile"
          />
          {token && (
            <div className="hidden group-hover:flex flex-col gap-2 w-36 py-3 px-5 bg-[#1C1C1E] text-[#9E9E9E] absolute right-0 mt-3 rounded shadow-lg z-50">
              <p className="cursor-pointer hover:text-[#FF6B6B] transition-colors">My Profile</p>
              <p
                onClick={() => navigate('/orders')}
                className="cursor-pointer hover:text-[#FF6B6B] transition-colors"
              >
                Orders
              </p>
              <p onClick={logout} className="cursor-pointer hover:text-[#FF6B6B] transition-colors">
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 hover:scale-110 transition-transform"
            alt="Cart"
          />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#FF6B6B] text-[#EAEAEA] aspect-square rounded-full text-[8px]"
          >
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform"
        />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:hidden bg-[#1C1C1E] text-[#EAEAEA] transform transition-transform duration-300 z-50 ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer bg-[#0F0F0F]"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((path, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={() => setVisible(false)}
                className="py-2 hover:text-[#FF6B6B] transition-colors"
              >
                {navNames[index]}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;