import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 border-t border-[#2A2A2A] bg-[#0F0F0F] text-[#EAEAEA]">
      {/* Filter Options (Sidebar) */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-sans"
        >
          FILTERS
          <svg
            className={`w-4 h-4 sm:hidden text-[#EAEAEA] ${showFilter ? 'rotate-90' : ''} transition-transform duration-300`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </p>
        {/* Category Filter */}
        <div
          className={`border border-[#2A2A2A] bg-[#1C1C1E] pl-5 py-3 mt-6 rounded-lg shadow-md ${
            showFilter ? '' : 'hidden'
          } sm:block transition-all duration-300`}
        >
          <p className="mb-3 text-sm font-medium text-[#EAEAEA] font-sans">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-[#9E9E9E] font-sans">
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Men'}
                onChange={toggleCategory}
              />
              Men
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Women'}
                onChange={toggleCategory}
              />
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Kids'}
                onChange={toggleCategory}
              />
              Kids
            </label>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-[#2A2A2A] bg-[#1C1C1E] pl-5 py-3 my-5 rounded-lg shadow-md ${
            showFilter ? '' : 'hidden'
          } sm:block transition-all duration-300`}
        >
          <p className="mb-3 text-sm font-medium text-[#EAEAEA] font-sans">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-[#9E9E9E] font-sans">
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Topwear'}
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-4 h-4 text-[#FF6B6B] border-[#2A2A2A] rounded focus:ring-[#FF6B6B] transition-all duration-300"
                type="checkbox"
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side (Product Grid) */}
      <div className="flex-1 px-4 sm:px-0">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-[#2A2A2A] bg-[#1C1C1E] text-[#EAEAEA] text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300 font-sans"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;