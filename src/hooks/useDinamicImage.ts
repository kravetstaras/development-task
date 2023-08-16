import { useState, useEffect } from "react";

export default function useDynamicImage(imagePath: string): string | null {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        if (imagePath.startsWith("http")) {
          setImageSrc(imagePath);
        } else {
          const imageModule = await import(`../assets/${imagePath}`);
          setImageSrc(imageModule.default);
        }
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imagePath]);

  return imageSrc;
}
