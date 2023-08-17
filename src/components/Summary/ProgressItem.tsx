import React from "react";
import ProgressBar from "../common/ProgressBar";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypeProgressItem = {
  label: string;
  value?: string;
  percent: number;
  strokeColor?: string;
};

const StyledProgressItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .description {
    display: flex;
    justify-content: space-between;
    color: ${palette.progressDanger};
    font-size: 18px;
    font-weight: 400;
    line-height: 100%;
  }

  .percentages {
    .value {
      color: ${palette.primary};
    }
  }
`;

export default function ProgressItem({
  percent,
  strokeColor,
  label,
  value,
}: TypeProgressItem) {
  return (
    <StyledProgressItem>
      <ProgressBar percent={percent} color={strokeColor} />
      <div className="description">
        <h5 className="label">{label}</h5>
        <h5 className="percentages">
          <span>{`${percent}%`}</span>
          {value && <span className="value">{` (${value})`}</span>}
        </h5>
      </div>
    </StyledProgressItem>
  );
}
