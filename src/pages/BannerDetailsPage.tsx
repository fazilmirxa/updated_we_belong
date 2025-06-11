import React from "react";
import { useParams } from "react-router-dom";
import { bannerDetailImg } from "../assets";

const contentMap: Record<string, {
  title: string;
  description: string;
  images: string[];
}> = {
  community: {
    title: "Community",
    description:
      "From homegrown artisans to local food heroes, from indie labels to regional favourites, We Belong brings together a handpicked community...",
    images: [
      bannerDetailImg,
      bannerDetailImg,  
      bannerDetailImg
    ]
  },
  culture: {
    title: "Culture",
    description: "Coming soon...",
    images: ["/assets/culture1.jpg"]
  },
  celebration: {
    title: "Celebration",
    description: "Coming soon...",
    images: ["/assets/celebration1.jpg"]
  }
};

const BannerDetailPage: React.FC = () => {
  const { slug } = useParams();
  const content = contentMap[slug || ""];
  return (
    <div className="p-10 min-h-screen" style={{ paddingTop: "100px", backgroundColor: "#F5F5F5" }}>
      <div className="flex gap-4 justify-center flex-wrap">
        {content.images.map((src, i) => (
          <img key={i} src={src} alt={`Image ${i}`} className="w-[300px] h-[300px] object-cover rounded" />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-center my-6">{content.title}</h1>
      <p className="text-lg text-center max-w-3xl mx-auto border rounded-b-[50px] p-6">{content.description}</p>
    </div>
  );
};

export default BannerDetailPage;
