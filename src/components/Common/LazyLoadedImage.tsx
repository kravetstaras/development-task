import { PuffLoader } from "react-spinners";
import { palette } from "../../../styled-constants";

export default function LazyLoadImage({
  alt,
  imageSrc,
}: {
  alt: string;
  imageSrc: string | null;
}) {
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
