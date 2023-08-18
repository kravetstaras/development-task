import React from "react";
import styled from "styled-components";

import manPhoto from "../../assets/_mock_/avatars/man-photo.png";

const StyledPhoto = styled.img<{ src: string; alt: string }>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: fill;
`;

export default function Photo({ src = manPhoto, alt = "user mock photo" }) {
  return <StyledPhoto src={src} alt={alt} />;
}
