import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

import backIcon from "../../assets/back-icon.svg";

const StyledBackButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${palette.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const label = "Back to Results";

export default function BackButton() {
  return (
    <StyledBackButton
      onClick={() => console.log("need to implement go-back feat")}
    >
      <img src={backIcon} alt="back arrow" />
      <span>{label}</span>
    </StyledBackButton>
  );
}
