import React from "react";
import styled from "styled-components";

import PortfolioCard from "./PortfolioCard";

import { mockedPortfolioCards } from "./mockedData";
import { breakpoints } from "../../styled-constants";

const StyledPortfolio = styled.section`
  .card-holder {
    display: grid;
    gap: 30px;
    margin: 30px;
    align-items: flex-start;
    align-content: flex-start;

    @media screen and (min-width: ${breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <div className="card-holder">
        {mockedPortfolioCards.length > 0 &&
          mockedPortfolioCards.map((card) => (
            <PortfolioCard
              key={card.id}
              name={card.name}
              icon={card.icon}
              status={card.status}
              city={card.local.city}
              country={card.local.country}
              website={card.website}
              industry={card.industry}
              business_size={card.business_size}
              services={card.services}
              description={card.description}
            />
          ))}
      </div>
    </StyledPortfolio>
  );
}
