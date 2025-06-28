import GalleryPage from "../components/Gallery/GalleryPage";

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen pt-20"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
      backgroundSize: "400% 400%",
      animation: "smoothGradient 18s ease infinite",
    }}>
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
        <GalleryPage/>

        

        
        
      </div>
      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};
export default Gallery;