import React from 'react';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate('/orders');
      } else {
        navigate('/cart');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div
      className="min-h-screen flex items-center justify-center transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      <div
        className="flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}
      >
        <svg
          className="animate-spin h-8 w-8"
          viewBox="0 0 24 24"
          style={{ color: '#FF6B6B' }}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <p
          className="text-lg font-medium"
          style={{ color: '#EAEAEA', fontFamily: 'Poppins, sans-serif' }}
        >
          Verifying Payment...
        </p>
      </div>
    </div>
  );
};

export default Verify;