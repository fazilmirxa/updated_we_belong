import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status?: "Upcoming" | "Ongoing" | "Completed" | "Cancelled";
}

const statusColors: Record<string, string> = {
  Upcoming: "bg-green-100 text-green-700",
  Ongoing: "bg-yellow-100 text-yellow-800",
  Completed: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  location,
  description,
  status = "Upcoming",
}) => {
  const [month, day] = date.split(" ");
  const currentYear = new Date().getFullYear();
  const fadeInZoom = {
    hidden: { opacity: 0, transform: "scale(0.96) translateY(30px)" },
    visible: {
      opacity: 1,
      transform: "scale(1) translateY(2px)",
      transition: {
        duration: 0.6, // 👈 Change this value
        ease: [0.22, 1, 0.36, 2] as [number, number, number, number],
      },
    },
  };
  

  return (
    <Link
      to={`/event/${encodeURIComponent(title)}`}
      state={{ image, title, date, location, description, status }}
    >
      <motion.section
        variants={fadeInZoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full  rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 p-10 group hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[320px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(236, 107, 60, 0.2), rgba(243, 112, 33, 0.2), rgba(170, 35, 84, 0.2), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.2), rgba(212, 215, 0, 0.2))",
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
          animation: "moveGradient 10s ease infinite",
        }}
        
      >
        {/* Date */}
        <div className="text-center w-full lg:w-36 shrink-0">
          <p className="text-lg font-semibold text-gray-500 tracking-wide">{month?.toUpperCase()}</p>
          <p className="text-6xl font-bold text-gray-900 leading-none">{day}</p>
          <p className="text-lg text-gray-600">{currentYear}</p>
        </div>

        {/* Info */}
        <div className="flex-1 text-left space-y-4">
          <h3 className="text-4xl font-extrabold text-gray-800">{title}</h3>
          <p className="text-xl font-semibold text-gray-600">{location}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          <span
            className={`inline-block mt-3 px-4 py-2 rounded-full text-base font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>

        {/* Image with overlay */}
        {/* Image with circle hover overlay */}
<div className="relative w-full lg:w-[520px] shrink-0 overflow-hidden rounded-2xl group">
  <img
    src={image}
    alt={title}
    className="w-full h-60 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
  />
<style>
        {`
          @keyframes moveGradient {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

        `}
      </style>
</div>
      </motion.section>
    </Link>
  );
};

export default EventCard;
