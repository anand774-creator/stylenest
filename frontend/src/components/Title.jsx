import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-3 group">
      <p className="text-[#EAEAEA] text-lg sm:text-xl font-sans">
        {text1} <span className="text-[#FF6B6B] font-semibold">{text2}</span>
      </p>
      <span className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#FF6B6B] group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></span>
    </div>
  );
};

export default Title;