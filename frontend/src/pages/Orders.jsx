import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="pt-16" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="text-3xl mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-6 px-4 my-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', borderWidth: '1px' }}
          >
            <div className="flex items-start gap-6">
              <img className="w-16 sm:w-20 rounded-md" src={item.image[0]} alt={item.name} />
              <div>
                <p className="sm:text-lg font-medium" style={{ color: '#EAEAEA', fontFamily: 'Poppins, sans-serif' }}>
                  {item.name}
                </p>
                <div className="flex items-center gap-4 mt-2 text-base" style={{ color: '#9E9E9E' }}>
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2" style={{ color: '#9E9E9E' }}>
                  Date: <span style={{ color: '#9E9E9E' }}>{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-1" style={{ color: '#9E9E9E' }}>
                  Payment: <span style={{ color: '#9E9E9E' }}>{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#00DFA2' }}
                ></span>
                <p className="text-sm md:text-base" style={{ color: '#EAEAEA' }}>
                  {item.status}
                </p>
              </div>
              <button
                onClick={loadOrderData}
                className="px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8787]"
                style={{ backgroundColor: '#FF6B6B', color: '#EAEAEA' }}
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;