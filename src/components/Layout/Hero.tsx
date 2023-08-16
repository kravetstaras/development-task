import React from "react";
import styled from "styled-components";
import OgilvyLogo from "../common/OgilvyLogo";
import { LOGO_SIZE } from "../../constants";
import { palette } from "../../styled-constants";
import { Fragment } from "react";
import DetailItem from "../common/DetailItem";
import ActionButton from "../common/ActionButton";

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 15px 68px;

  h1 {
    margin: 80px auto 10px;
    color: ${palette.dark};
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
  }

  h2 {
    color: ${palette.primary};
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
  }

  .categories-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 20px;
  }

  .description {
    color: ${palette.primary};
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    max-width: 458px;
    margin-bottom: 30px;
  }
`;

const heroContent = {
  title: "Ogilvy",
  details: {
    time: "10 years",
    location: "New York",
  },
  categories: [
    {
      id: "1",
      label: "Design",
    },
    {
      id: "2",
      label: "Marketing",
    },
    {
      id: "3",
      label: "Email",
    },
    {
      id: "4",
      label: "Social Media Management",
    },
    {
      id: "5",
      label: "Video Production",
    },
  ],
  description:
    "In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands matter in a complex, noisy, hyper-connected world.",
};

export default function Hero() {
  return (
    <StyledHero>
      <OgilvyLogo size={LOGO_SIZE.L} />
      <h1>{heroContent.title}</h1>
      <h2 className="details">
        <span>{heroContent.details.time}</span>
        <span>·</span>
        <span>{heroContent.details.location}</span>
      </h2>
      <ul className="categories-list">
        {heroContent.categories.map((category) => (
          <Fragment key={category.id}>
            <DetailItem label={category.label} />
          </Fragment>
        ))}
      </ul>
      <p className="description">{heroContent.description}</p>
      <ActionButton onClick={() => console.log("need to add feat")} />
    </StyledHero>
  );
}
