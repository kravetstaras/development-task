import React, { useState } from "react";
import styled from "styled-components";

import { breakpoints } from "../../styled-constants";
import Carousel from "./review-carousel";
import ReviewCard from "./review-card/ReviewCard";
import ActionButton from "../common/ActionButton";
import Popup from "../common/Popup";
import { mockedReviews } from "./mockedData";
import ReviewForm from "./ReviewForm";

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

  .submit-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 25px;

    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledReviews>
      {isVisible && (
        <Popup isOpen={isVisible} callback={setIsVisible}>
          {/* @ts-ignore */}
          <ReviewForm callback={setIsVisible} submitTitle="title" />
        </Popup>
      )}
      <div className="submit-section">
        <p>AgencyVista Reviews</p>
        <ActionButton
          type="button"
          label="Submit Review"
          onClick={() => setIsVisible(true)}
        />
      </div>
      <Carousel />
      <div className="reviews-grid">
        {mockedReviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
    </StyledReviews>
  );
}
