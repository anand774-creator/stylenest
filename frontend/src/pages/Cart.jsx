import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="bg-[#0F0F0F] pt-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-2xl mb-3">
          <Title text1={'YOUR'} text2={'CART'} />
        </div>

        {/* Cart Items as a Slide-Out Panel */}
        <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-[#1C1C1E] border-l border-[#2A2A2A] shadow-lg transform translate-x-0 transition-transform duration-300 z-50 overflow-y-auto">
          <div className="p-6">
            {cartData.length === 0 ? (
              <p className="text-[#EAEAEA] text-center text-sm font-sans">Your cart is empty.</p>
            ) : (
              cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);

                return (
                  <div
                    key={index}
                    className="py-4 border-t border-b border-[#2A2A2A] text-[#EAEAEA] grid grid-cols-[4fr_1fr_0.5fr] items-center gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        className="w-16 sm:w-20 rounded-md"
                        src={productData.image[0]}
                        alt={productData.name}
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm sm:text-base font-medium font-sans truncate">
                          {productData.name}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <p className="text-[#FF6B6B] font-medium">
                            {currency}
                            {productData.price}
                          </p>
                          <p className="px-2 py-1 border border-[#2A2A2A] bg-[#0F0F0F] text-[#9E9E9E] text-xs rounded-md">
                            {item.size}
                          </p>
                        </div>
                      </div>
                    </div>
                    <input
                      onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? null
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      className="border border-[#2A2A2A] bg-[#0F0F0F] text-[#EAEAEA] max-w-12 px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                    />
                    <svg
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="w-4 h-4 cursor-pointer text-[#EAEAEA] hover:text-[#FF6B6B] transition-transform duration-300 hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                  </div>
                );
              })
            )}

            {/* Cart Total and Checkout Button */}
            {cartData.length > 0 && (
              <div className="mt-6">
                <CartTotal />
                <div className="w-full text-end mt-6">
                  <button
                    onClick={() => navigate('/place-order')}
                    className="bg-[#FF6B6B] hover:bg-[#FF8787] text-[#EAEAEA] text-sm font-semibold px-8 py-3 rounded-md transition-all duration-300"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;