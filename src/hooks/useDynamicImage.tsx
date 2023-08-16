import { useState, useEffect } from "react";

type ImageSrc = string | null;

export default function useDynamicImage(imagePath: string): ImageSrc {
  const [imageSrc, setImageSrc] = useState<ImageSrc>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        if (imagePath.startsWith("http")) {
          setImageSrc(imagePath);
        } else {
          const { default: dynamicImportedImage } = await import(
            `../assets/${imagePath}`
          );
          setImageSrc(dynamicImportedImage);
        }
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imagePath]);

  return imageSrc;
}
