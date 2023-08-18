import React from "react";
import styled from "styled-components";

import Carousel from "./review-carousel";
import ReviewCard from "./review-card/ReviewCard";
import { mockedReviews } from "./mockedData";

import { breakpoints } from "../../styled-constants";

const StyledReviews = styled.section`
  padding: 0 50px;

  .reviews-grid {
    column-count: 1;
    column-gap: 30px;
    margin: 30px auto;

    @media screen and (min-width: ${breakpoints.md}) {
      column-count: 2;
    }
  }
`;

export default function Reviews() {
  return (
    <StyledReviews>
      <Carousel />
      <div className="reviews-grid">
        {mockedReviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </StyledReviews>
  );
}
