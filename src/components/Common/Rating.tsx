import React from "react";

import star from "../../assets/star.svg";
import { styled } from "styled-components";

type TypeRating = {
  rating: number;
};

const StyledRating = styled.div`
  display: flex;
  gap: 5px;
`;

export default function Rating({ rating }: TypeRating) {
  return (
    <StyledRating>
      {Array.from({ length: rating }).map((_score) => (
        <img src={star} alt="star-icon" />
      ))}
    </StyledRating>
  );
}
