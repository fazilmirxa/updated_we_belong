import React from "react";
import { bg, weBelongHero } from "../assets";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C42]/80 via-[#9F1F63]/60 to-[#F15A24]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        {/* Top Tagline */}
        <p className="text-sm md:text-base text-white/90 font-light mb-4">
          Where the land{" "}
          <span className="font-semibold text-white">sings</span> &amp; the{" "}
          <span className="font-semibold text-white">soul</span> listens
        </p>

        {/* Hero Logo Image */}
        <img
          src={weBelongHero}
          alt="We Belong"
          className="max-w-[770px] w-full mb-6"
        />

        {/* Subtext */}
        <p className="text-xl md:text-xl text-white/85 leading-relaxed max-w-2xl">
          The most awaited gathering in the hills of Kodagu.
          <br />
          Rooted in heritage. Alive with sound. Open to all.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
