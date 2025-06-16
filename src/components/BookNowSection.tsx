import React, { useState } from "react";
import { bookNow } from "../assets";
import BookNowModal, { type BookingData } from "./Modal/BookNowModal";

const BookNowSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePay = (data: BookingData) => {
    console.log("Booking info to proceed with payment:", data);
    // Trigger payment integration here (e.g. Razorpay, Stripe)
  };

  return (
    <section className="w-full p-6 flex">
      <div
        className="relative w-full h-auto min-h-[300px] mt-[143px] rounded-[30px] overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${bookNow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full px-6 py-8 md:py-0 md:px-12 text-white gap-6 md:gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="uppercase tracking-widest text-sm md:text-md mb-1 text-center">
              Chapter 1
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">COORG</h2>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-20 w-[1.5px] bg-white/40 ml-[-200px]" />

          {/* Center Content */}
          <div className="text-center md:text-left max-w-md text-sm md:text-base text-white/90">
            <p>The most awaited gathering in the hills of Kodagu.</p>
            <p>Rooted in heritage. Alive with sound. Open to all.</p>
          </div>

          {/* Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 md:px-10 py-3 md:py-4 border text-base md:text-xl font-bold rounded-b-[30px] rounded-t-[10px] bg-white text-black transition-all"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BookNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPay={handlePay}
      />
    </section>
  );
};

export default BookNowSection;
