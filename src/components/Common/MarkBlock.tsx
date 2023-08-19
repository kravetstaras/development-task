import React from "react";
import { MARK_COLOR } from "../../constants";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypeMarkBlock = {
  color?: "blue" | "green";
  mark: string;
  description: string;
};

const StyledMarkBlock = styled.div<{ color?: "blue" | "green" }>`
  background-color: ${(props) =>
    props.color === MARK_COLOR.BLUE ? palette.blueBg : palette.successBg100};
  height: 80px;
  width: 100%;
  position: relative;
  padding: 20px 10px 0 25px;

  &::after {
    content: "";
    position: absolute;
    height: 80px;
    width: 5px;
    border-radius: 3px;
    left: 0;
    top: 0;
    background-color: ${(props) =>
      props.color === MARK_COLOR.BLUE ? palette.blue : palette.success};
  }

  .mark {
    color: ${(props) =>
      props.color === MARK_COLOR.BLUE ? palette.blue : palette.success};
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 5px;
  }

  .description {
    color: ${(props) =>
      props.color === MARK_COLOR.BLUE ? palette.primary : palette.success};
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    margin: 0;
  }
`;

export default function MarkBlock({
  color = MARK_COLOR.GREEN,
  mark,
  description,
}: TypeMarkBlock) {
  return (
    <StyledMarkBlock color={color}>
      <h3 className="mark">{mark}</h3>
      <p className="description">{description}</p>
    </StyledMarkBlock>
  );
}
