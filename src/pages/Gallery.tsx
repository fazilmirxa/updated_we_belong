import GalleryGridOne from "../components/Gallery/GalleryGridOne";
import GalleryGridTwo from "../components/Gallery/GalleryGridTwo";


const images = [
  "https://images.unsplash.com/photo-1506459225024-1428097a7e18",

  "https://images.unsplash.com/photo-1506459225024-1428097a7e18",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1506459225024-1428097a7e18",

  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-axs", //broken image test




];

const products = [
  "https://images.unsplash.com/photo-1506459225024-1428097a7e18",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "broken-link", // test
];

const people = [
  "https://images.unsplash.com/photo-1506459225024-xgahssasad27",
  "https://images.unsplash.com/photo-1495474472287-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-xgahssasad27",
  "https://images.unsplash.com/photo-1497515114629-xgahssasad27",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",   
  "https://images.unsplash.com/photo-1497515114629-xgahssasad27",
  "https://images.unsplash.com/photo-1497515114629-xgahssasad27",   
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c",
  "https://images.unsplash.com/photo-1497515114629-xgahssasad27",
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

        {/* Title 2 */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
            Products
          </h2>
        </div>
        <GalleryGridTwo images={products} />


        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
            People
          </h2>
        </div>
        <GalleryGridOne images={people} />
      </div>
    </div>
  );
};
export default Gallery;