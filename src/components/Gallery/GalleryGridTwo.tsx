type GalleryProps = {
    images: string[];
  };
  
  const GalleryGridTwo = ({ images }: GalleryProps) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="w-full h-full object-cover transition hover:opacity-90"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default GalleryGridTwo;
  