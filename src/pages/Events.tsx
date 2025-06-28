import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { eventList } from "../data/eventList"; 


const tabLabels = ["All", "Ongoing", "Upcoming", "Completed"];

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredEvents =
    activeTab === "All"
      ? eventList
      : eventList.filter((event) => event.status === activeTab);

  return (
    <section className="min-h-screen px-6 py-10  pt-40">

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10 mt-[-30px]">
  {tabLabels.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-200
        ${
          activeTab === tab
            ? "bg-gradient-to-r from-[#0B1C42]/80 via-[#9F1F63]/60 to-[#F15A24]/60 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        }`}
    >
      {tab} Event
    </button>
  ))}
</div>



      {/* Event Cards */}
      <div className=""> 
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              status={event.status as "Ongoing" | "Upcoming" | "Completed"}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No events found for "{activeTab}".
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;
