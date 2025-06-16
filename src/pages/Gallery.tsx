import GalleryGridOne from "../components/Gallery/GalleryGridOne";

import { community1, community2, community3, celebration1, celebration2, celebration3, culture1, culture2, culture3 } from "../assets";


const images = [
  community1,
  community2,
  celebration1,
  culture1,
  celebration2,
  community3,
  culture3,
  celebration3,
  culture2,
  




];
const Gallery = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="px-4 sm:px-10 py-10 max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Magical Moments
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the gallery and discover the beautiful moments captured during the previous edition. 
            Spot yourselves and relive those memories.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGridOne images={images} />

        

        
        
      </div>
    </div>
  );
};
export default Gallery;