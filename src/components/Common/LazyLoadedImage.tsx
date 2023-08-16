import React from "react";
import { PuffLoader } from "react-spinners";
import { palette } from "../../styled-constants";

interface LazyLoadedImageProps {
  alt: string;
  imageSrc: string | null;
}

export default function LazyLoadedImage({
  alt,
  imageSrc,
}: LazyLoadedImageProps) {
  return (
    <>
      {imageSrc ? (
        <img
          style={{ objectFit: "contain" }}
          src={imageSrc}
          alt={alt}
          loading="lazy"
        />
      ) : (
        <PuffLoader color={`${palette.danger}`} />
      )}
    </>
  );
}
