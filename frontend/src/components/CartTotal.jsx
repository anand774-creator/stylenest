import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <section className="py-6 bg-gradient-section text-text-primary rounded-md shadow-md px-6 max-w-md mx-auto">
      <Title text1={'CART'} text2={'TOTALS'} />
      <div className="flex flex-col gap-4 mt-6 text-sm md:text-base">
        <div className="flex justify-between">
          <p className="text-text-secondary">Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr className="border-none h-px bg-text-secondary opacity-50" />
        <div className="flex justify-between">
          <p className="text-text-secondary">Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr className="border-none h-px bg-text-secondary opacity-50" />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p>{currency} {total}.00</p>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
