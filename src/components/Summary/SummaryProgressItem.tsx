import React from "react";
import ProgressBar from "../common/ProgressBar";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypeSummaryProgressItem = {
  label: string;
  value?: string;
  percent: number;
  strokeColor?: string;
};

const StyledSummaryProgressItem = styled.li`
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

export default function SummaryProgressItem({
  percent,
  strokeColor,
  label,
  value,
}: TypeSummaryProgressItem) {
  return (
    <StyledSummaryProgressItem>
      <ProgressBar percent={percent} color={strokeColor} />
      <div className="description">
        <h5 className="label">{label}</h5>
        <h5 className="percentages">
          <span>{`${percent}%`}</span>
          {value && <span className="value">{` (${value})`}</span>}
        </h5>
      </div>
    </StyledSummaryProgressItem>
  );
}
