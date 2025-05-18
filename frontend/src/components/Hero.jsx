import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="w-full bg-[#0F0F0F] text-[#EAEAEA] relative overflow-hidden min-h-[80vh] flex items-center pt-20">
      <div className="w-[90%] max-w-5xl mx-auto relative rounded-lg overflow-hidden shadow-lg top-10">
        <img
          src={assets.hero_img}
          alt="Discover Our Collection"
          className="w-full h-[50vh] sm:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <p className="uppercase tracking-widest text-[#FF6B6B] font-semibold mb-2 text-base sm:text-lg">
            New Arrivals
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 max-w-4xl font-sans">
            Elevate Your Style
          </h1>
          <button
            type="button"
            className="bg-[#FF6B6B] hover:bg-[#FF8787] text-[#EAEAEA] font-semibold py-3 px-8 rounded-md transition-all duration-300 text-base sm:text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;