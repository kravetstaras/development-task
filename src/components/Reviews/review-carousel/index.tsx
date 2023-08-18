import React from "react";
import { Navigation, A11y } from "swiper/modules";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import CarouselSlide from "./CarouselSlide";

import { palette } from "../../../styled-constants";

import carouselBg from "../../../assets/carousel-bg.png";
import carouselUser from "../../../assets/_mock_/review/carousel/slide-1.jpg";

const StyledSwiper = styled(Swiper)`
  height: min-content;
  background-color: ${palette.pure};
  border-radius: 2px;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 457px;
    height: 135px;
    background-image: url(${carouselBg});
    background-size: cover;
    z-index: -1;
  }
`;

const slideData = {
  rating: 5,
  feedback:
    "The Ogilvy marketing team is the best in the business you will find anywhere. They focus on your desired outcomes and work with you to achieve those aoutcomes and maximum success. They are consistent, driven, and a lot of FUN to partner with.",
  author: "Kelly Figge",
  photo: carouselUser,
  profession: "CEO at Adventures",
};

export default function Carousel() {
  return (
    <StyledSwiper modules={[Navigation, A11y]} slidesPerView={1} navigation>
      <SwiperSlide>
        <CarouselSlide data={slideData} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselSlide data={slideData} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselSlide data={slideData} />
      </SwiperSlide>
    </StyledSwiper>
  );
}
