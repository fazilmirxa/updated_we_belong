import React from "react";

interface DetailsCardProps {
  image: string;
  title: string;
  items: string[];
  color?: string; // optional custom color for the title bar
}

const DetailsCard: React.FC<DetailsCardProps> = ({ image, title, items, color = "#8B572A" }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-[32px] overflow-hidden shadow-md text-center">
      {/* Top Image */}
{image ? (
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-[32px]"
      />
) : (
  <div className="w-full h-64 bg-gray-200 rounded-t-[32px]"></div>
)}
      {/* Title Bar */}
      <div
        className="py-3 text-white font-semibold text-lg"
        style={{
          backgroundColor: color,
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
        }}
      >
        {title}
      </div>

      {/* Description Items */}
      <div className="py-4 px-4 space-y-1 text-gray-600 text-sm font-medium">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
