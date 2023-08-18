import React from "react";
import { Link } from "react-router-dom";
import useDynamicImage from "../../../hooks/useDynamicImage";
import { styled } from "styled-components";

type TypeNavigationIte = {
  imgPath: string;
  slug: string;
};

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export default function LatestNavigationItem({
  imgPath,
  slug,
}: TypeNavigationIte) {
  const imageSrc = useDynamicImage(imgPath);
  return (
    <Link to={"/"}>
      <SocialIcon src={imageSrc} alt={slug + "icon"} />
    </Link>
  );
}
