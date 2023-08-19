import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

import StatusCheckGreen from "../../assets/status-check-green.svg";
import TrendingUp from "../../assets/_mock_/performance/trending-up.svg";
import { TypeGraph } from "./PerformanceCard";
import Graph from "./Graph";

type TypePerformanceCardGraph = {
  title: string;
  description: string;
  value: number | string;
  status: string;
  percentage: number;
  graph: TypeGraph[];
  performing: string;
};

const StyledPerformanceCardGraph = styled.div`
  width: 100%;
  h4 {
    color: ${palette.dark};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  p {
    color: ${palette.primary};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    h3 {
      color: ${palette.dark};
      font-size: 30px;
      font-weight: 600;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${palette.primary};
      font-size: 12px;
      font-weight: 500;
    }
  }

  h5 {
    font-size: 12px;
    font-weight: 600;

    span {
      color: ${palette.grey};
    }
  }

  .performing {
    padding: 0 10px;
    background-color: ${palette.successBg50};
    height: 40px;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: ${palette.success};
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export default function PerformanceCardGraph({
  title,
  description,
  value,
  status,
  percentage,
  graph,
  performing,
}: TypePerformanceCardGraph) {
  return (
    <StyledPerformanceCardGraph>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="value">
        <h3>{value}</h3>
        <span className="status">
          {status === "Verified" && (
            <img src={StatusCheckGreen} alt={`status mark`} />
          )}
          {status}
        </span>
      </div>
      <h5 style={{ color: percentage > 0 ? "#27AE60" : "#F2994A" }}>
        {percentage > 0 ? "+" : ""}
        {percentage}%<span> vs. last 30 days</span>
      </h5>
      <Graph graph={graph} />
      <div className="performing">
        <img src={TrendingUp} alt="stonks icon" />
        <span>{performing}</span>
      </div>
    </StyledPerformanceCardGraph>
  );
}
