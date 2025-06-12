import React from "react";
import { Link } from "react-router-dom";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status?: "Ongoing" | "Upcoming" | "Completed";
}

const statusColors: Record<string, string> = {
  Ongoing: "bg-green-100 text-green-700",
  Upcoming: "bg-yellow-100 text-yellow-700",
  Completed: "bg-gray-100 text-gray-700",
};

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  location,
  description,
  status = "Upcoming",
}) => {
  return (
    <Link
      to={`/event/${encodeURIComponent(title)}`}
      state={{ image, title, date, location, description, status }}
    >
      <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-3xl overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer">
        <div className="relative">
        <ImageWithPlaceholder
            src={image}
            alt={title}
            className="w-full h-56 object-cover"
          />
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="text-sm text-gray-500">
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Location:</strong> {location}</p>
          </div>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
