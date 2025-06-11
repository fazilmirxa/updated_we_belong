import React from "react";
import FeatureCard from "./FeatureCard";
import { FaUsers, FaStar, FaGlassCheers } from "react-icons/fa";

const banners = [
  {
    icon: <FaUsers size={64} color="#ec4899" />,
    title: "Community",
    description: "Where creativity, collaboration and local voices feel at home.",
    slug: "community"
  },
  {
    icon: <FaStar size={64} color="#3b82f6" />,
    title: "Culture",
    description: "Honouring heritage and carrying it forward through experience.",
    slug: "culture"
  },
  {
    icon: <FaGlassCheers size={64} color="#f59e0b" />,
    title: "Celebration",
    description: "A celebration of rhythm, roots and the moments that move us.",
    slug: "celebration"
  }
];

const BannerSection: React.FC = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap p-20">
      {banners.map((banner) => (
        <FeatureCard key={banner.slug} {...banner} />
      ))}
    </div>
  );
};

export default BannerSection;
