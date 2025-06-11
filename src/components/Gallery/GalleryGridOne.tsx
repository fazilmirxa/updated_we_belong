import { useState } from "react";

type GalleryProps = {
  images: string[];
};

const getRandomHeight = () => {
  const heights = ["h-40", "h-52", "h-64", "h-72", "h-80"];
  return heights[Math.floor(Math.random() * heights.length)];
};

const GalleryGridOne = ({ images }: GalleryProps) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-4">
      {images.map((img, index) => {
        const heightClass = getRandomHeight();
        const [hasError, setHasError] = useState(false);

        return (
          <div
            key={index}
            className={`w-full ${heightClass} rounded-lg break-inside-avoid shadow-md overflow-hidden`}
          >
            {!hasError ? (
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition hover:opacity-90"
                onError={() => setHasError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GalleryGridOne;
