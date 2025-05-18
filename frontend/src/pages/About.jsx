import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-[#0F0F0F] text-[#EAEAEA]">
      {/* About Us Section */}
      <div className="text-2xl text-center pt-20 border-t border-[#2A2A2A]">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="StyleNest"
          loading="lazy"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[#9E9E9E] font-sans">
          <p>
            StyleNest was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className="text-[#EAEAEA]">Our Mission</b>
          <p>
            Our mission at StyleNest is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4 px-4 sm:px-6 lg:px-8">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 px-4 sm:px-6 lg:px-8">
        <div className="border border-[#2A2A2A] bg-[#1C1C1E] px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-[#EAEAEA]">Quality Assurance:</b>
          <p className="text-[#9E9E9E] font-sans">
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className="border border-[#2A2A2A] bg-[#1C1C1E] px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-[#EAEAEA]">Convenience:</b>
          <p className="text-[#9E9E9E] font-sans">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="border border-[#2A2A2A] bg-[#1C1C1E] px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <b className="text-[#EAEAEA]">Exceptional Customer Service:</b>
          <p className="text-[#9E9E9E] font-sans">
            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;