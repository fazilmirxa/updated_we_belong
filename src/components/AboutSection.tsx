import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import { guitarImg } from "../assets";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="relative px-4 py-12 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-[#0e1a4b] text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Who We Are?
          </h2>
          <p className="text-lg font-medium mb-4">
            More than a festival. A feeling that stays.
          </p>
          <p className="text-[#5c5f70] mb-4 leading-relaxed">
            We Belong was created to bring people together through the language of culture — spoken in music, in movement, in shared meals and honest conversations. We’re not chasing trends. We’re holding space. For artists and ancestors. For stories that deserve a stage.
          </p>
          <p className="text-[#5c5f70] mb-6 leading-relaxed">
            Born from a love for local roots and soulful connection, our gatherings honour the past while moving with the beat of today.
          </p>

          {/* ✅ Explore button as Link */}
          <Link
            to="/about"
            className="inline-block mt-2 px-12 py-2 text-[#0e1a4b] border border-[#0e1a4b] font-semibold bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-[#0e1a4b] hover:text-white"
          >
            Explore
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 md:pl-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={guitarImg}
            alt="Who We Are"
            className="w-full rounded-[20px] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
