import React from "react";
import { useParams } from "react-router-dom";
import { bannerDetailImg } from "../assets";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

const contentMap: Record<
  string,
  { title: string; description: string; images: string[] }
> = {
  community: {
    title: "Community",
    description:
      "From homegrown artisans to local food heroes, from indie labels to regional favourites, We Belong brings together a handpicked community. Wander through vibrant flea markets, taste traditional recipes, and sip drinks crafted for great conversations.",
    images: [bannerDetailImg, bannerDetailImg, bannerDetailImg],
  },
  culture: {
    title: "Culture",
    description:
      "We Belong celebrates the regal traditions of Kodagu, starting with immersive heritage walks that bring the Coorg culture to life. From Kodava dance forms to folk performances and storytelling corners, each moment lets you feel the soul of Coorg.",
    images: [
      "/assets/culture1.jpg",
      "/assets/culture2.jpg",
      "/assets/culture3.jpg",
    ],
  },
  celebration: {
    title: "Celebration",
    description:
      "Music fills the hills as day turns to dusk. From sunset sets to late-night rhythms, our artist lineup is designed to move you.\nGet ready to groove to Indo Tech, Vachan Chinnappa, DJ Aria, Nikhil Chinappa, Ivan, Nikon and more.",
    images: [
      "/assets/celebration1.jpg",
      "/assets/celebration2.jpg",
      "/assets/celebration3.jpg",
    ],
  },
};

const BannerDetail: React.FC = () => {
  const { slug } = useParams();
  const content = contentMap[slug || "celebration"];

  return (
    <div className="min-h-screen py-28 px-6 md:px-16 bg-white">
      {/* Top Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Left Image spans two rows */}
        <ImageWithPlaceholder
          src={content.images[0]}
          alt="Left"
          className="rounded-xl w-full h-full max-h-[470px] object-cover row-span-2"
        />

        {/* Title Box (top center) */}
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-b-[30px] py-6 px-4 h-[188px]">
          <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-500">
            {content.title}
          </h1>
        </div>

        {/* Right Image spans two rows */}
        <ImageWithPlaceholder
          src={content.images[2]}
          alt="Right"
          className="rounded-xl w-full h-full max-h-[470px] object-cover row-span-2"
        />

        {/* Center Image (bottom center) */}
        <div className="flex items-center justify-center w-full h-[265px]">
          <ImageWithPlaceholder
            src={content.images[1]}
            alt="Center"
            height={265}
            className="rounded-xl w-full h-[265px] object-cover"
          />
        </div>
      </div>

      {/* Description Box */}
      <div className="mx-auto border border-gray-400 rounded-b-[40px] px-6 py-6 text-center max-w-5xl">
        <p className="text-lg text-gray-800 leading-relaxed">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default BannerDetail;
