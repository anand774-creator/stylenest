import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-[#EAEAEA] cursor-pointer block font-sans"
      to={`/product/${id}`}
    >
      <div className="relative overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1C1C1E] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
        <img
          className="w-full h-48 object-cover transition-transform duration-300"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#FF6B6B] hover:bg-[#FF8787] text-[#EAEAEA] font-medium py-2 px-4 rounded-md transition-all duration-300 text-sm">
            Quick View
          </button>
        </div>
      </div>
      <p className="pt-3 pb-1 text-sm text-[#EAEAEA] truncate">{name}</p>
      <p className="text-sm font-medium text-[#FF6B6B]">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;