import { useState } from "react";

function ImageWithFallback({ src, alt, className, ...props }) {
  const [error, setError] = useState(false);

  // Default fallback image
  const fallbackSrc = "/images/default-playlist.jpg";

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}

export default ImageWithFallback;
