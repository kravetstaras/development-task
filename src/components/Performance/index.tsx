import React from "react";
import PerformanceCard from "./PerformanceCard";
import { mockedPerformanceCards } from "./mockedData";
import styled from "styled-components";

const StyledPerformance = styled.section`
  padding: 0 20px;
`;

export default function Performance() {
  return (
    <StyledPerformance>
      {mockedPerformanceCards.length > 0 &&
        mockedPerformanceCards.map((card) => (
          <PerformanceCard
            key={card.id}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
    </StyledPerformance>
  );
}
