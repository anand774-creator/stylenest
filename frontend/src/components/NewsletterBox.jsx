import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Simple validation check (email format can be improved)
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Simulate newsletter subscription API call
    setTimeout(() => {
      toast.success(`Thank you for subscribing, ${email}!`);
      setEmail(''); // clear input field
    }, 1000);
  };

  return (
    <div className="text-center py-10 bg-bg-secondary px-4 sm:px-6 lg:px-8">
      <p className="text-2xl md:text-3xl font-semibold text-text-primary">
        Join Our Newsletter & Save 20%
      </p>
      <p className="text-text-secondary mt-3 max-w-xl mx-auto">
        Be the first to know about exclusive deals, new arrivals, and insider-only discounts.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-border bg-bg-primary rounded pl-3"
      >
        <input
          className="w-full sm:flex-1 bg-transparent text-text-primary placeholder-text-secondary outline-none"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-accent-primary text-bg-primary text-sm font-medium px-8 py-3 rounded hover:bg-accent-secondary transition-colors"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
