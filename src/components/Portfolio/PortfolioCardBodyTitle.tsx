import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypePortfolioCardBodyTitle = {
  label: string;
};

const StyledPortfolioCardBodyTitle = styled.h5`
  color: ${palette.primary};
  font-size: 14px;
  font-weight: 500;
`;

export default function PortfolioCardBodyTitle({
  label,
}: TypePortfolioCardBodyTitle) {
  return <StyledPortfolioCardBodyTitle>{label}</StyledPortfolioCardBodyTitle>;
}
