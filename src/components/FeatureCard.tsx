import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, slug }) => {
  const navigate = useNavigate();

  return (
    <Link to={`/banners/${slug}`} className="group relative overflow-hidden w-[300px] h-[400px] bg-white rounded-b-[50px] shadow-lg p-6 flex flex-col justify-between items-center text-center transition-shadow duration-300 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Gradient fill layer */}
      <div
        className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none opacity-100"
        style={{
          background:
            'linear-gradient(to right, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))'
        }}
      />

      {/* Content on top */}
      <div className="relative z-10 mt-10 text-pink-500 text-4xl">{icon}</div>
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(`/banners/${slug}`);
        }}
        className="relative z-10 w-10 h-10 border border-black rounded-full flex items-center justify-center text-black bg-transparent transition-all duration-500 ease-in-out overflow-hidden group-hover:w-28 group-hover:px-4"
      >
        <span className="absolute left-0 right-0 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-sm font-medium">
          Explore
        </span>
        <span className="transition-opacity duration-300 group-hover:opacity-0">
          &gt;
        </span>
      </button>
    </Link>
  );
};

export default FeatureCard;
