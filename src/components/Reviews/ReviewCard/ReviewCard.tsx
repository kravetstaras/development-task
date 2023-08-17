import React from "react";

import Publication from "./Publication";
import Rating from "./Rating";
import { IAuthor, IPublication } from "../../../interfaces";

type TypeReviewCard = {
  review: {
    rating: number;
    author: IAuthor;
    social: {
      name: string;
      logo: string;
    };
    message: string;
    publishedAt: Date;
    replay: IPublication;
  };
};

const ReviewCard: React.FC<TypeReviewCard> = ({ review }) => {
  const { rating, social, author, message, publishedAt, replay } = review;

  return (
    <div className="review-card">
      <div className="card-heading">
        <Rating rating={rating} />
        <img src={social?.logo} alt={social.name} className="social" />
      </div>
      <Publication
        message={message}
        author={author}
        publishedAt={publishedAt}
      />
      {replay?.message && (
        <Publication
          message={replay.message}
          author={replay.author}
          publishedAt={replay.publishedAt}
        />
      )}
    </div>
  );
};

export default ReviewCard;
