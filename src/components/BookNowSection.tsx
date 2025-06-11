import React from 'react';
import { bookNow } from '../assets';

const BookNowSection: React.FC = () => {
  return (
    <section className="w-full p-6 mt-20">
      <div
        className="relative w-full h-[300px] md:h-[300px] mt-[143px] rounded-[30px] overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${bookNow})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
          <p className="uppercase tracking-widest text-sm md:text-md mb-1">Chapter 1</p>
          <h2 className="text-4xl md:text-5xl font-bold">COORG</h2>
        </div>

        {/* Button */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
          <button className="text-[#1a1a4b] font-semibold px-6 py-3 rounded-[15px] text-lg shadow hover:bg-gray-100 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookNowSection;
