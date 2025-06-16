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
    <Link to={`/banners/${slug}`}> 
    <div className="w-[300px] h-[400px] bg-white rounded-b-[50px] shadow-lg p-6 flex flex-col justify-between items-center text-center hover:shadow-xl transition-shadow duration-300">
    <div className="mt-10">{icon}</div>
    <div>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
    <button
      onClick={() => navigate(`/banners/${slug}`)}
      className="w-10 h-10 border border-black rounded-full flex items-center justify-center  text-black bg-transparent"
    >
      &gt;
    </button>
  </div>
  </Link>
  );
};

export default FeatureCard;
