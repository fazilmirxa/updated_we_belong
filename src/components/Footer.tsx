import React from "react";
import { FaYoutube, FaWhatsapp, FaTwitter } from "react-icons/fa";

const BottomFooter: React.FC = () => {
  return (
    <footer className="w-full text-white py-10 px-6 md:px-16 bg-gradient-to-r from-[#002b64] via-[#4e0f40] to-[#a02200]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold leading-tight">
            Belonging Is A Rhythm You Remember,
            <br />
            Even When The Music Fades.
          </h2>
        </div>

        {/* Right Info */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-sm">savithacarriappa@hotmail.com</p>
          <p className="text-sm">Capitol Village Resort, Madikeri</p>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-2">
            <a href="#" aria-label="YouTube" className="text-white hover:text-red-500 hover:opacity-80">
              <FaYoutube />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white hover:text-green-400 hover:opacity-80">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400 hover:opacity-80">
              <FaTwitter />
            </a>
          </div>

          <p className="text-sm underline mt-2 cursor-pointer hover:opacity-80">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
