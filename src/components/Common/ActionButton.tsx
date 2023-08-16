import React from "react";
import styled from "styled-components";
import { BUTTON_HEIGHT } from "../../constants";
import { palette } from "../../styled-constants";

type TActionButton = {
  height?: "l" | "s";
  label?: string;
  onClick: () => void;
};

export default function ActionButton({
  height = BUTTON_HEIGHT.S,
  label = "Contact Ogilvy",
  onClick,
}: TActionButton) {
  return (
    <StyledActionButton onClick={onClick} height={height}>
      {label}
    </StyledActionButton>
  );
}

const StyledActionButton = styled.button<{ height: "l" | "s" }>`
  background-color: ${palette.secondary};
  color: ${palette.pure};
  height: ${(props) => (props.height === BUTTON_HEIGHT.L ? "40px" : "30px")};
  padding: ${(props) =>
    props.height === BUTTON_HEIGHT.L ? "11px : 25px" : "6px 15px"};
  border-radius: 2px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: salmon;
  }
`;
