import React from 'react';
import { aboutUs } from '../assets'; // replace with your actual image path
import BannerSection from './BannerSection';

const AboutUsSection: React.FC = () => {
  return (
    <>
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left - Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0e1a4b] mb-4">Who We Are?</h2>
        <p className="italic text-lg text-gray-600 mb-6">
          More than a festival. A feeling that stays.
        </p>
        <p className="text-[#1a1a1a] text-base leading-relaxed mb-4">
          We Belong was created to bring people together through the language of culture — spoken in music, in movement, in shared meals and honest conversations. We’re not chasing trends. We’re holding space. For artists and ancestors. For stories that deserve a stage.
        </p>
        <p className="text-[#1a1a1a] text-base leading-relaxed">
          Born from a love for local roots and soulful connection, our gatherings honour the past while moving with the beat of today.
        </p>
      </div>

      {/* Right - Image */}
      <div className="flex justify-center">
        <div >
          <img
            src={aboutUs}
            alt="About Us"
            className="w-[320px] md:w-[400px] h-auto object-cover rounded-[30px]"
          />
        </div>
      </div>


    </section>
    <div className="bg-white">
    <BannerSection />
    </div>
        </>
  );
};

export default AboutUsSection;
