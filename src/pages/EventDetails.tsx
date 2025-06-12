import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import { eventList } from "../data/eventList";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import BookNowModal, { type BookingData } from "../components/Modal/BookNowModal";

const EventDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePay = (data: BookingData) => {
    console.log("Booking info to proceed with payment:", data);
    // Trigger payment integration here (e.g. Razorpay, Stripe)
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

  const suggestedEvents = eventList.filter(
    (e) => e.title !== event.title && e.status === event.status
  );

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mt-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0C3D] mb-10">
          {event.title}
        </h1>
        {/* Image */}
        <div className="overflow-hidden">
          <ImageWithPlaceholder
            src={event.image}
            alt={event.title}
            className="w-full h-auto rounded-b-[40px] object-cover"
          />
        </div>

        {/* Event Info + Button */}
        <div className="mt-8">
          <p className="text-lg font-bold text-black">{event.date}</p>
          <p className="text-lg font-bold text-black mb-4">{event.location}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0B0C3D] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#1a1b5c] transition"
          >
            Book Now
          </button>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>{event.description}</p>
          <p>
            This event is a wonderful opportunity to connect, learn, and grow in
            a vibrant environment. Don’t miss out on this experience of a
            lifetime!
          </p>
        </div>
      </div>

      {/* Suggested Events */}
      {suggestedEvents.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#0B0C3D]">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedEvents.map((suggested, index) => (
              <EventCard
                key={index}
                image={suggested.image}
                title={suggested.title}
                date={suggested.date}
                location={suggested.location}
                description={suggested.description}
                status={
                  suggested.status as "Ongoing" | "Upcoming" | "Completed"
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal for Booking */}
      <BookNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPay={handlePay}
      />
    </div>
  );
};

export default EventDetail;
