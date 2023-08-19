import React from "react";
import styled, { css } from "styled-components";
import { BUTTON_HEIGHT } from "../../constants";
import { palette } from "../../styled-constants";

type TypeActionButton = {
  height?: "l" | "s";
  type?: "button" | "submit" | "email" | "cancel";
  label?: string;
  onClick?: () => void;
};

export default function ActionButton({
  height = BUTTON_HEIGHT.S,
  label = "Contact Ogilvy",
  type = "button",
  onClick,
}: TypeActionButton) {
  if (type === "email") {
    return (
      <StyledActionLink
        href="mailto:ogivly@example.com?subject=Feedback&body=Message"
        height={height}
      >
        {label}
      </StyledActionLink>
    );
  }

  if (type === "cancel") {
    return (
      <StyledCancelButton onClick={onClick} height={height} type="button">
        {label}
      </StyledCancelButton>
    );
  }
  return (
    <StyledActionButton
      onClick={type === "button" ? onClick : null}
      height={height}
      type={type}
    >
      {label}
    </StyledActionButton>
  );
}

const styledButton = css<{ height: "l" | "s" }>`
  background-color: ${palette.secondary};
  color: ${palette.pure};
  height: ${(props) => (props.height === BUTTON_HEIGHT.L ? "40px" : "30px")};
  padding: ${(props) =>
    props.height === BUTTON_HEIGHT.L ? "11px 25px" : "6px 15px"};
  border-radius: 2px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    background-color 1s ease,
    color 1s ease;

  &:hover,
  &:active {
    background-color: ${palette.successBg100};
    color: ${palette.success};
  }
`;

const StyledActionButton = styled.button<{ height }>`
  ${styledButton}
`;

const StyledActionLink = styled.a<{ height; href }>`
  ${styledButton}
  text-decoration: none;
`;

const StyledCancelButton = styled.button<{ height }>`
  ${styledButton}
  padding: 11px 12px;
  color: ${palette.dark};
  background-color: ${palette.pure};
  border: 1px solid #e9eaf1;
  transition:
    background-color 0.3s ease,
    color 1s ease,
    border 1s ease;

  &:hover,
  &:active {
    background-color: ${palette.dangerBg};
    color: ${palette.danger};
    border: 1px solid ${palette.danger};
  }
`;
