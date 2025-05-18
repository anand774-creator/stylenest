import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-4 py-16 text-center text-sm md:text-base bg-bg-primary text-text-primary px-4 sm:px-6 lg:px-8">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 mx-auto mb-4"
          alt="Easy Exchange Policy"
        />
        <p className="font-semibold text-text-primary">Simple & Easy Exchanges</p>
        <p className="text-text-secondary mt-1">
          Enjoy hassle-free exchanges within 15 days of purchase.
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 mx-auto mb-4"
          alt="7 Days Return Policy"
        />
        <p className="font-semibold text-text-primary">7-Day Return Guarantee</p>
        <p className="text-text-secondary mt-1">
          Return any product within 7 days for a full refund.
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 mx-auto mb-4"
          alt="Best Customer Support"
        />
        <p className="font-semibold text-text-primary">24/7 Customer Support</p>
        <p className="text-text-secondary mt-1">
          Our team is here anytime to help you with your needs.
        </p>
      </div>
    </section>
  );
};

export default OurPolicy;
