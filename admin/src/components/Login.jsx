import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full transition-opacity ease-in duration-500 opacity-100"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      <div
        className="bg-[#1C1C1E] shadow-lg rounded-lg px-8 py-6 max-w-md w-full"
        style={{ border: '1px solid #2A2A2A' }}
      >
        <h1
          className="text-2xl font-bold mb-4"
          style={{ color: '#EAEAEA', fontFamily: 'Poppins, sans-serif' }}
        >
          Admin Panel
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4 min-w-72">
            <p
              className="text-sm font-medium mb-2"
              style={{ color: '#EAEAEA' }}
            >
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
              style={{
                backgroundColor: '#1C1C1E',
                borderColor: '#2A2A2A',
                color: '#EAEAEA',
              }}
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-4 min-w-72">
            <p
              className="text-sm font-medium mb-2"
              style={{ color: '#EAEAEA' }}
            >
              Password
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
              style={{
                backgroundColor: '#1C1C1E',
                borderColor: '#2A2A2A',
                color: '#EAEAEA',
              }}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-[#EAEAEA] font-medium transition-all duration-300 ease-in-out hover:bg-[#FF8787]"
            style={{ backgroundColor: '#FF6B6B' }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;