import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypeProgressBar = {
  percent: number;
  color: string;
};

const StyledProgressBar = styled.div<{ percent: number; color: string }>`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${palette.progressBg};
  position: relative;

  &::after {
    content: "";
    height: 100%;
    width: ${(props) => props.percent + "%"};
    left: 0;
    top: 0;
    border-radius: 3px;
    position: absolute;
    background-color: ${(props) => props.color};
  }
`;

export default function ProgressBar({
  percent,
  color = "#FD5359",
}: TypeProgressBar) {
  return <StyledProgressBar percent={percent} color={color} />;
}
