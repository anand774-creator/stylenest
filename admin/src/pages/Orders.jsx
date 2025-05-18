import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div
      className="p-6 transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F', fontFamily: 'Poppins, sans-serif' }}
    >
      <h3 style={{ color: '#EAEAEA', marginBottom: '1rem' }}>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm"
            style={{ border: '1px solid #2A2A2A', backgroundColor: '#1C1C1E', borderRadius: '8px' }}
            key={index}
          >
            <img
              className="w-12"
              src={assets.parcel_icon}
              alt="Parcel"
              style={{ filter: 'brightness(1.5)' }}
            />
            <div>
              <div>
                {order.items.map((item, index) => (
                  <p
                    className="py-0.5"
                    key={index}
                    style={{ color: '#EAEAEA' }}
                  >
                    {item.name} x {item.quantity} <span>{item.size}</span>
                    {index === order.items.length - 1 ? '' : ','}
                  </p>
                ))}
              </div>
              <p
                className="mt-3 mb-2 font-medium"
                style={{ color: '#EAEAEA' }}
              >
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div>
                <p style={{ color: '#9E9E9E' }}>{order.address.street + ','}</p>
                <p style={{ color: '#9E9E9E' }}>
                  {order.address.city + ', ' + order.address.state + ', ' + order.address.country + ', ' + order.address.zipcode}
                </p>
              </div>
              <p style={{ color: '#9E9E9E' }}>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]" style={{ color: '#EAEAEA' }}>
                Items: {order.items.length}
              </p>
              <p className="mt-3" style={{ color: '#EAEAEA' }}>
                Method: {order.paymentMethod}
              </p>
              <p style={{ color: order.payment ? '#00DFA2' : '#FF6B6B' }}>
                Payment: {order.payment ? 'Done' : 'Pending'}
              </p>
              <p style={{ color: '#EAEAEA' }}>
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <p className="text-sm sm:text-[15px]" style={{ color: '#EAEAEA' }}>
              {currency}
              {order.amount}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
              style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
            >
              {['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'].map((status) => (
                <option
                  key={status}
                  value={status}
                  style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}
                >
                  {status}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;