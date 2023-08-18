import React from "react";
import { styled } from "styled-components";

import Publication from "./Publication";
import Rating from "../../common/Rating";

import { IPublication } from "../../../interfaces";
import { palette } from "../../../styled-constants";

type TypeReviewCard = {
  review: {
    rating: number;
    social: {
      name: string;
      logo: string;
    };
    feedback: IPublication;
    replay?: IPublication;
  };
};

const StyledReviewCard = styled.div`
  padding: 25px 30px;
  border-radius: 2px;
  background-color: ${palette.pure};
  margin-bottom: 30px;
  display: inline-block;

  .card-heading {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export default function ReviewCard({ review }: TypeReviewCard) {
  const { rating, social, feedback, replay } = review;

  return (
    <StyledReviewCard>
      <div className="card-heading">
        <Rating rating={rating} />
        <img src={social?.logo} alt={social.name} className="social" />
      </div>
      <Publication
        message={feedback?.message}
        author={feedback?.author}
        publishedAt={feedback?.publishedAt}
      />
      {replay?.message && (
        <Publication
          message={replay.message}
          author={replay.author}
          publishedAt={replay.publishedAt}
        />
      )}
    </StyledReviewCard>
  );
}
