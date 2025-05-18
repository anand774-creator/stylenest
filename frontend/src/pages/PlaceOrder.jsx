import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
          if (data.success) {
            navigate('/orders');
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh]"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/* ------------- Left Side ---------------- */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px] p-6 rounded-lg" style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}>
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="text"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
            style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all duration-300"
          style={{ borderColor: '#2A2A2A', backgroundColor: '#1C1C1E', color: '#EAEAEA' }}
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* ------------- Right Side ------------------ */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* --------------- Payment Method Selection ------------- */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}
            >
              <p
                className={`min-w-4 h-4 rounded-full border ${method === 'stripe' ? 'bg-[#00DFA2]' : 'bg-transparent'}`}
                style={{ borderColor: '#2A2A2A' }}
              ></p>
              <img className="h-6 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            
            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#1C1C1E', border: '1px solid #2A2A2A' }}
            >
              <p
                className={`min-w-4 h-4 rounded-full border ${method === 'cod' ? 'bg-[#00DFA2]' : 'bg-transparent'}`}
                style={{ borderColor: '#2A2A2A' }}
              ></p>
              <p className="text-sm font-medium mx-4" style={{ color: '#9E9E9E' }}>
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="px-16 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8787]"
              style={{ backgroundColor: '#FF6B6B', color: '#EAEAEA' }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;