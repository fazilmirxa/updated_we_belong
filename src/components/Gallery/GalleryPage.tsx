import React from "react";
import { motion } from "framer-motion";
import community1 from "../../assets/CCC Images/community-1.png";
import community2 from "../../assets/CCC Images/community-2.jpg";
import community3 from "../../assets/CCC Images/community-3.png";
import celebration1 from "../../assets/CCC Images/celebration-1.png";
import celebration2 from "../../assets/CCC Images/celebration-2.png";
import celebration3 from "../../assets/CCC Images/celebration-3.png";

interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
}

interface GalleryPageProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    src: community1,
    title: "MARSHMELLO INDIA TOUR",
    subtitle: "ARENA",
  },
  {
    src: community2,
    title: "DJ SNAKE LIVE",
    subtitle: "STAGE 1",
  },
  {
    src: community3,
    title: "SUNBURN NIGHT",
    subtitle: "FESTIVAL",
  },
  {
    src: celebration1,
    title: "COORG VIBES",
    subtitle: "EXPERIENCE",
  },
  {
    src: celebration2,
    title: "G-EAZY ON STAGE",
    subtitle: "GLOBAL TOUR",
  },
  {
    src: celebration3,
    title: "AFTERPARTY",
    subtitle: "CLUB NIGHT",
  },
];

const GalleryPage: React.FC<GalleryPageProps> = ({ images = defaultImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden group rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={img.src}
            alt={img.title}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 transition duration-500" />
          <div className="absolute left-[-100%] bottom-4 bg-white px-4 py-2 text-[#0e1a4b] font-bold text-lg rounded-md shadow group-hover:left-4 transition-all duration-500 ease-in-out">
            <div className="text-[#0e1a4b]">{img.title}</div>
            <div className="text-sm font-medium text-gray-400">{img.subtitle}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryPage;
