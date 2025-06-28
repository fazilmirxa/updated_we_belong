import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../data/eventList";
import { FaTicketAlt } from "react-icons/fa";
import BookNowModal, { type BookingData } from "../components/Modal/BookNowModal";
import { coorg, workshop1, workshop2 } from "../assets";
import { motion } from "framer-motion";
import FleaMarket from "../components/FleaMarket";
import EventRegion from "../components/EventRegion";
import ExperienceZone from "../components/ExperienceZone";
import MusicLineup from "../components/MusicLineup";

const EventDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePay = (data: BookingData) => {
    console.log("Booking info to proceed with payment:", data);
  };

  const { title } = useParams<{ title: string }>();
  const decodedTitle = decodeURIComponent(title || "");
  const event = eventList.find((e) => e.title === decodedTitle);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Event not found.
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white py-16 px-4"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
        backgroundSize: "400% 400%",
        animation: "smoothGradient 18s ease infinite",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full relative pb-[56.25%] mb-6 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={coorg}
            alt="Coorg Fest 2025"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow"
          />
        </motion.div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-4 w-[300px] h-[60px] text-[#0e1a4b] bg-white border border-[#0e1a4b] font-semibold rounded-[18px] hover:bg-[#0e1a4b] hover:text-white transition-all duration-300 mb-6 text-lg"
        >
          <FaTicketAlt />
          Book Your Spot
        </button>

        <p className="text-base text-gray-700 leading-relaxed text-justify sm:text-center">
          A celebration of tech innovation featuring top speakers, workshops, and networking.
          <br />
          This event is a wonderful opportunity to connect, learn, and grow in a vibrant environment.
          Don’t miss out on this experience of a lifetime!
        </p>
      </motion.div>

      {/* Curated Workshop Section */}
      <div className="mt-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a4b] mb-10">
          With Curated Workshop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-5xl mx-auto justify-items-center">
          {/* CARD 1 */}
          <div className="w-full max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden">
            <div className="relative group">
              <img
                src={workshop1}
                alt="Art & Craft"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <ul className="text-sm text-gray-700 text-center space-y-1 bg-white p-5 rounded-[12px]">
                  <li>• Resin Art</li>
                  <li>• Pottery (Wheel Throwing)</li>
                  <li>• Natural Dye & Fabric Art</li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0e1a4b] text-center">Art & Craft</h3>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden">
            <div className="relative group">
              <img
                src={workshop2}
                alt="Therapeutic Experiences"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <ul className="text-sm text-gray-700 text-center space-y-1 bg-white p-5 rounded-[12px]">
                  <li>• Sound Healing</li>
                  <li>• Breathwork</li>
                  <li>• Nature Journaling</li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0e1a4b] text-center">Therapeutic Experiences</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Flea Market */}
      <div className="mt-16">
        <FleaMarket />
      </div>

      {/* Event Region */}
      <div className="mt-12">
        <EventRegion />
      </div>

      {/* Experience Zone */}
      <div className="mt-12">
        <ExperienceZone />
      </div>

      <MusicLineup/>

      {/* Booking Modal */}
      <BookNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPay={handlePay}
      />

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default EventDetail;
