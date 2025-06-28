import React from "react";
import { motion } from "framer-motion";
import { CenterImage } from "../assets";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-black px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Top Tagline */}
        <motion.p
          className="text-base md:text-xl text-black/90 font-light mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Where the land{" "}
          <span className="font-semibold text-black">sings</span> &amp; the{" "}
          <span className="font-semibold text-black">soul</span> listens
        </motion.p>

        {/* Hero Video Animation */}
        <motion.img
          src={CenterImage}
          alt="Hero"
          className="max-w-[770px] w-full mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          strokeLinecap="round" 
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
