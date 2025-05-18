import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div
      className="flex flex-col gap-2 p-6 transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F', fontFamily: 'Poppins, sans-serif' }}
    >
      <p className="mb-2" style={{ color: '#EAEAEA' }}>
        All Products List
      </p>
      <div className="flex flex-col gap-2">
        {/* ------- List Table Title ---------- */}
        <div
          className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 text-sm"
          style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}
        >
          <b style={{ color: '#EAEAEA' }}>Image</b>
          <b style={{ color: '#EAEAEA' }}>Name</b>
          <b style={{ color: '#EAEAEA' }}>Category</b>
          <b style={{ color: '#EAEAEA' }}>Price</b>
          <b className="text-center" style={{ color: '#EAEAEA' }}>
            Action
          </b>
        </div>

        {/* ------ Product List ------ */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 text-sm"
            style={{ border: '1px solid #2A2A2A', backgroundColor: '#1C1C1E' }}
            key={index}
          >
            <img className="w-12 rounded-md" src={item.image[0]} alt={item.name} />
            <p style={{ color: '#EAEAEA' }}>{item.name}</p>
            <p style={{ color: '#EAEAEA' }}>{item.category}</p>
            <p style={{ color: '#EAEAEA' }}>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center cursor-pointer text-lg hover:scale-110 transition-transform duration-300"
              style={{ color: '#FF6B6B' }}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;