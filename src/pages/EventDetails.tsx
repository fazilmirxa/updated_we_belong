import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import { eventList } from "../data/eventList";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import BookNowModal, { type BookingData } from "../components/Modal/BookNowModal";
import { coorg, workshop1, workshop2 } from "../assets";
import DetailsCard from "../components/DetailsCard";

const EventDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePay = (data: BookingData) => {
    console.log("Booking info to proceed with payment:", data);
    // Trigger payment integration here
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
    <div className="min-h-screen bg-white py-16 px-4 mt-[70px]">
      {/* Main Section - Image Left, Details Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2  ">
          <ImageWithPlaceholder
            src={coorg}
            alt={event.title}
            className="w-full h-auto rounded-t-none rounded-b-[50px] shadow-xl object-cover"

          />
        </div>

       {/* Details */}
<div className="w-full md:w-1/2 flex items-center">
  <div className="text-center md:text-left space-y-10 flex flex-col justify-center w-full">
    <h1 className="text-4xl md:text-5xl font-bold text-[#0B0C3D]">
      {event.title}
    </h1>

    <div className="text-lg font-semibold text-gray-800">
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>

    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-[#0B1147] text-white px-8 py-4 rounded-t-none rounded-b-[30px] text-lg font-bold shadow-lg hover:shadow-xl transition"
    >
      Book Now
    </button>

    <div className="text-gray-700 text-base md:text-lg space-y-3">
      <p>{event.description}</p>
      <p>
        This event is a wonderful opportunity to connect, learn, and grow in a vibrant environment. Don’t miss out on this experience of a lifetime!
      </p>
    </div>
  </div>
</div>

      </div>

      

     {/* Workshop Section */}
<div className="mt-20 mb-6 px-4 text-center">
<h1
  className="mx-auto px-6 md:px-10 py-4 border border-[#0B1147] text-2xl md:text-3xl text-[#0B1147] rounded-b-[30px] mt-10 mb-10 w-[90%] sm:w-[80%] md:w-[500px] text-center"
>
  With Curated Workshop
</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-5xl mx-auto justify-items-center">
    <DetailsCard
      image={workshop1}
      title="Art & Craft"
      items={["• Resin Art", "• Pottery (Wheel Throwing)", "• Natural Dye & Fabric Art"
      ]
        
      }
    />
    <DetailsCard
      image={workshop2}
      title="Therapeutic Experiences"
      items={["• Sound Healing", "• Breathwork", "• Nature Journaling"]}
    />
  </div>
</div>
     {/* Music Section */}
<div className="mt-20 mb-6 px-4 text-center">
<h1
  className="mx-auto px-6 md:px-10 py-4 border border-[#0B1147] text-2xl md:text-3xl text-[#0B1147] rounded-b-[30px] mt-10 mb-10 w-[90%] sm:w-[80%] md:w-[500px] text-center"
>
  End with MUSIC LINEUP
</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full max-w-5xl mx-auto justify-items-center">
    <DetailsCard
      image={"https://www.thechristianbeat.org/wp-content/uploads/2023/02/NF2023-e1676577588380-1024x691.jpg"}
      title="NF"
      items={["Introspective rap style"]
        
      }
    />
    <DetailsCard
      image={"https://www.thestatesman.com/wp-content/uploads/2025/04/arijit-singh-pahalgam-attack-jpg.webp"}
      title="Arijit Singh"
      items={["Soulful and romantic voice"]}
    />
    <DetailsCard
      image={"https://www.hindustantimes.com/ht-img/img/2025/06/12/1600x900/justin_bieber_facial_paralysis_1654929851122_1749733690281.jpg"}
      title="Justin"
      items={["Canadian singer and songwriter"]}
    />
  </div>
</div>


      {/* Booking Modal */}
      <BookNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPay={handlePay}
      />
    </div>
  );
};

export default EventDetail;
