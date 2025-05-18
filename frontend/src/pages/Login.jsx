import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPasword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-md mx-auto mt-16 gap-6 p-6 rounded-lg shadow-lg"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      <div className="inline-flex items-center gap-3 mb-4">
        <p className="text-3xl font-bold" style={{ color: '#EAEAEA', fontFamily: 'Poppins, sans-serif' }}>
          {currentState}
        </p>
        <hr className="border-none h-[2px] w-10" style={{ backgroundColor: '#2A2A2A' }} />
      </div>
      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
        style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPasword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
        style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer hover:underline" style={{ color: '#9E9E9E' }}>
          Forgot your password?
        </p>
        <p
          onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          className="cursor-pointer hover:underline"
          style={{ color: '#9E9E9E' }}
        >
          {currentState === 'Login' ? 'Create account' : 'Login Here'}
        </p>
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3 mt-4 rounded-md font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#FF8787]"
        style={{ backgroundColor: '#FF6B6B' }}
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;