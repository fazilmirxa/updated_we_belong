import React from "react";

interface ImageCollageProps {
  images: string[]; // expects 9 images
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="max-w-7xl mx-auto p-6 rounded-[40px] border border-black overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[700px]">
        {images.map((img, index) => {
          // Define layout based on index
          const getGridPosition = (i: number) => {
            switch (i) {
              case 0: return "col-span-1 row-span-1"; // top-left
              case 1: return "col-span-1 row-span-1"; // top-mid
              case 2: return "col-span-2 row-span-1"; // top-right
              case 3: return "col-span-1 row-span-1"; // middle-left
              case 4: return "col-span-2 row-span-1"; // middle center large
              case 5: return "col-span-1 row-span-2"; // middle-right tall
              case 6: return "col-span-1 row-span-1"; // bottom-left
              case 7: return "col-span-1 row-span-1"; // bottom-mid
              case 8: return "col-span-1 row-span-1"; // bottom-right
              default: return "";
            }
          };

          return (
            <div
              key={index}
              className={`w-full h-full rounded-xl overflow-hidden ${getGridPosition(index)}`}
            >
              {img ? (
                <img
                  src={img}
                  alt={`img-${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-xl" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCollage;
