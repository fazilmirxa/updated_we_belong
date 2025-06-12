import { useState, useEffect } from "react";

type ImageWithPlaceholderProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
};

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  className = "",
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  // Reset error state when src changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`w-full ${className} ${hasError ? "bg-gray-200" : ""} rounded-lg overflow-hidden`}
      style={{ width, height }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition hover:opacity-90"
          onError={() => setHasError(true)} // Trigger error state on image load failure
        />
      ) : (
        <div className="w-full h-full bg-gray-200" /> // Gray placeholder when image fails
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
