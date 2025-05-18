import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div
      className="pt-10 transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md transition-transform duration-300 hover:scale-105"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto rounded-lg" src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1 p-6 rounded-lg" style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}>
          <h1
            className="font-medium text-2xl mt-2"
            style={{ color: '#EAEAEA', fontFamily: 'Poppins, sans-serif' }}
          >
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2" style={{ color: '#9E9E9E' }}>
              (122)
            </p>
          </div>
          <p className="mt-5 text-3xl font-medium" style={{ color: '#EAEAEA' }}>
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 md:w-4/5" style={{ color: '#9E9E9E' }}>
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p style={{ color: '#EAEAEA' }}>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-md transition-all duration-300 ${
                    item === size ? 'border-[#FF6B6B] bg-[#1C1C1E]' : 'border-[#2A2A2A] bg-[#1C1C1E]'
                  }`}
                  style={{ color: '#EAEAEA' }}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8787]"
            style={{ backgroundColor: '#FF6B6B', color: '#EAEAEA' }}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" style={{ borderColor: '#2A2A2A' }} />
          <div className="text-sm mt-5 flex flex-col gap-1" style={{ color: '#9E9E9E' }}>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className="mt-20">
        <div className="flex">
          <b
            className="px-5 py-3 text-sm cursor-pointer"
            style={{ backgroundColor: '#1C1C1E', color: '#EAEAEA', border: '1px solid #2A2A2A' }}
          >
            Description
          </b>
          <p
            className="px-5 py-3 text-sm cursor-pointer"
            style={{ backgroundColor: '#1C1C1E', color: '#9E9E9E', border: '1px solid #2A2A2A' }}
          >
            Reviews (122)
          </p>
        </div>
        <div
          className="flex flex-col gap-4 px-6 py-6 text-sm rounded-b-lg"
          style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A', borderTop: 'none' }}
        >
          <p style={{ color: '#9E9E9E' }}>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the need for a physical presence.
            E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global
            reach they offer.
          </p>
          <p style={{ color: '#9E9E9E' }}>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices,
            and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      {/* --------- display related products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;