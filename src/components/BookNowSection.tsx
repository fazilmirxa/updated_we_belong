import React from "react";
import EventCard from "../components/EventCard";
import { eventList } from "../data/eventList";

const Events: React.FC = () => {
  return (
    <section className="px-4 md:px-10 py-10 pt-20">

      {/* Event Cards */}
      <div>
        {eventList.length > 0 ? (
          eventList.map((event, index) => (
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
            No events available.
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;
