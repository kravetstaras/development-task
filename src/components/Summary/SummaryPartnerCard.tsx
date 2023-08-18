import React from "react";
import { styled } from "styled-components";
import { palette } from "../../styled-constants";

import arrow from "../../assets/arrow-forward.svg";

type TypeSummaryPartnerCard = {
  logo: string;
  name: string;
  description: string;
  href: string;
};

const StyledSummaryPartnerCard = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 38px 20px;
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px ${palette.dark}10;

  .logo {
    width: 150px;
    margin: 0 auto;
  }

  .name {
    color: ${palette.dark};
    font-weight: 600;
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
  }

  .description {
    color: ${palette.primary};
    font-size: 14px;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${palette.progressDanger};
    margin: 0 auto;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export default function SummaryPartnerCard({
  logo,
  name,
  description,
  href,
}: TypeSummaryPartnerCard) {
  return (
    <StyledSummaryPartnerCard>
      <img className="logo" src={logo} alt={name + " logo"} />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <a href={href} target="_blank" rel="noreferrer">
        OPEN <img src={arrow} alt="arrow icon" />
      </a>
    </StyledSummaryPartnerCard>
  );
}
