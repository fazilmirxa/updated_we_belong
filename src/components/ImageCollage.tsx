import React from "react";

interface ImageCollageProps {
  images: string[]; // ideally 9 images
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="flex justify-center px-5 sm:px-4">
      <div
        className="w-full max-w-[1100px] px-4 py-6 rounded-[30px] border bg-white shadow-xl"
        style={{ borderColor: "#0e1a4b" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.slice(0, 9).map((img, index) => {
            const hideOnDesktop = index === 8 ? "lg:hidden" : "";

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[10px] group aspect-square relative ${hideOnDesktop}`}
              >
                <img
                  src={img}
                  alt={`img-${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
