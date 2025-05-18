import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4 p-6 transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F', fontFamily: 'Poppins, sans-serif' }}
    >
      <div>
        <p className="mb-2" style={{ color: '#EAEAEA' }}>
          Upload Image
        </p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 rounded-md border"
              style={{ borderColor: '#2A2A2A' }}
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="Upload Image 1"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 rounded-md border"
              style={{ borderColor: '#2A2A2A' }}
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="Upload Image 2"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20 rounded-md border"
              style={{ borderColor: '#2A2A2A' }}
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="Upload Image 3"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 rounded-md border"
              style={{ borderColor: '#2A2A2A' }}
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="Upload Image 4"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2" style={{ color: '#EAEAEA' }}>
          Product name
        </p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2" style={{ color: '#EAEAEA' }}>
          Product description
        </p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2" style={{ color: '#EAEAEA' }}>
            Product category
          </p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
          >
            <option value="Men" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Men
            </option>
            <option value="Women" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Women
            </option>
            <option value="Kids" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Kids
            </option>
          </select>
        </div>

        <div>
          <p className="mb-2" style={{ color: '#EAEAEA' }}>
            Sub category
          </p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
          >
            <option value="Topwear" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Topwear
            </option>
            <option value="Bottomwear" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Bottomwear
            </option>
            <option value="Winterwear" style={{ color: '#EAEAEA', backgroundColor: '#1C1C1E' }}>
              Winterwear
            </option>
          </select>
        </div>

        <div>
          <p className="mb-2" style={{ color: '#EAEAEA' }}>
            Product Price
          </p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300 sm:w-[120px]"
            style={{ backgroundColor: '#1C1C1E', borderColor: '#2A2A2A', color: '#EAEAEA' }}
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p className="mb-2" style={{ color: '#EAEAEA' }}>
          Product Sizes
        </p>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer rounded-md transition-all duration-300 ${
                  sizes.includes(size) ? 'bg-[#FF6B6B]' : 'bg-[#1C1C1E]'
                }`}
                style={{ color: '#EAEAEA', border: sizes.includes(size) ? 'none' : '1px solid #2A2A2A' }}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="accent-[#FF6B6B]"
        />
        <label
          className="cursor-pointer"
          htmlFor="bestseller"
          style={{ color: '#EAEAEA' }}
        >
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 rounded-md font-medium transition-all duration-300 hover:bg-[#FF8787]"
        style={{ backgroundColor: '#FF6B6B', color: '#EAEAEA' }}
      >
        ADD
      </button>
    </form>
  );
};

export default Add;