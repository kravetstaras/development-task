import React from "react";
import styled, { css } from "styled-components";
import { BUTTON_HEIGHT } from "../../constants";
import { palette } from "../../styled-constants";

type TypeActionButton = {
  height?: "l" | "s";
  type?: "button" | "submit" | "email";
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

const StyledActionButton = styled.button<{ height }>`
  ${styledButton}
`;

const StyledActionLink = styled.a<{ height; href }>`
  ${styledButton}
  text-decoration: none;
`;
