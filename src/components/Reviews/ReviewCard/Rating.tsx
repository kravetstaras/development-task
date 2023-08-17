import React from "react";

import star from "../../../assets/star.svg";

type TypeRating = {
  rating: number;
};

const Rating: React.FC<TypeRating> = ({ rating }) => (
  <div className="rating">
    {Array.from({ length: rating }).map((_score) => (
      <img src={star} />
    ))}
  </div>
);

export default Rating;
