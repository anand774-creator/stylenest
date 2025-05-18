import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0A0A0A] text-[#EAEAEA] font-sans">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr_1fr] gap-8">
        {/* Brand Section */}
        <div>
          <img src={assets.logo} alt="StyleNest Logo" className="w-24 mb-4" />
          <p className="max-w-md text-[#9E9E9E] leading-relaxed text-sm">
            StyleNest is your destination for trendy, high-quality fashion. Discover unique styles crafted to elevate your wardrobe with comfort and elegance.
          </p>
          {/* Newsletter Input */}
          <div className="mt-4">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1C1C1E] text-[#EAEAEA] border border-[#2A2A2A] rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-[#FF6B6B] text-[#EAEAEA] px-4 py-2 rounded-md hover:bg-[#FF8787] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-medium mb-3 text-[#EAEAEA]">COMPANY</p>
          <ul className="flex flex-col gap-2 text-[#9E9E9E]">
            <li className="hover:text-[#FF6B6B] cursor-pointer transition-colors duration-300">Home</li>
            <li className="hover:text-[#FF6B6B] cursor-pointer transition-colors duration-300">About Us</li>
            <li className="hover:text-[#FF6B6B] cursor-pointer transition-colors duration-300">Delivery</li>
            <li className="hover:text-[#FF6B6B] cursor-pointer transition-colors duration-300">Privacy Policy</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <p className="text-lg font-medium mb-3 text-[#EAEAEA]">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-[#9E9E9E]">
            <li>+91-6393748882</li>
            <li>contact@stylenest.com</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-lg font-medium mb-3 text-[#EAEAEA]">FOLLOW US</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#9E9E9E] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-[#9E9E9E] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.316 3.608 1.291.975.975 1.229 2.242 1.291 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.316 2.633-1.291 3.608-.975.975-2.242 1.229-3.608 1.291-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.316-3.608-1.291-.975-.975-1.229-2.242-1.291-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.316-2.633 1.291-3.608.975.975 2.242 1.229 3.608 1.291 1.266.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.665.076-3.122.458-4.315 1.651C1.545 3.916 1.163 5.373 1.087 7.038c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.076 1.665.458 3.122 1.651 4.315 1.193 1.193 2.65 1.575 4.315 1.651 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.665-.076 3.122-.458 4.315-1.651 1.193-1.193 1.575-2.65 1.651-4.315.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.076-1.665-.458-3.122-1.651-4.315-1.193-1.193-2.65-1.575-4.315-1.651-1.28-.058-1.688-.072-4.947-.072z" />
              </svg>
            </a>
            <a href="#" className="text-[#9E9E9E] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 sm:px-6">
        <hr className="border-[#2A2A2A] h-px opacity-50" />
        <p className="py-4 text-sm text-center text-[#9E9E9E]">
          © 2025 stylenest.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;