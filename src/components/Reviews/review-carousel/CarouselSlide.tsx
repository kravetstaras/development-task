import React from "react";
import styled from "styled-components";

import Rating from "../../common/Rating";
import { palette } from "../../../styled-constants";

type TypeCarouselSlide = {
  rating: number;
  feedback: string;
  author: string;
  photo: string;
  profession: string;
};

const StyledCarouselSlide = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 0;
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  p {
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${palette.dark};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    max-width: 618px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h3 {
    color: ${palette.dark};
    font-size: 18px;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 5px;
  }

  h5 {
    color: ${palette.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }
`;

export default function CarouselSlide({ data }: { data: TypeCarouselSlide }) {
  return (
    <StyledCarouselSlide>
      <Rating rating={data.rating} />
      <p>{data.feedback}</p>
      <img src={data.photo} alt="review author pik" />
      <h3>{data.author}</h3>
      <h5>{data.profession}</h5>
    </StyledCarouselSlide>
  );
}
