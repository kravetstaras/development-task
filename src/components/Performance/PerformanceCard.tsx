import React from "react";
import styled from "styled-components";

import performanceImage from "../../assets/_mock_/performance/performanceImage.png";
import { palette } from "../../styled-constants";
import PerformanceCardGraph from "./PerformanceCardGraph";

export type TypeGraph = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type TypeCardGraph = {
  id: number;
  title: string;
  description: string;
  value: number | string;
  status: string;
  percentage: number;
  graph: TypeGraph[];
  performing: string;
};

type TypePerformanceCard = {
  title: string;
  description: string;
  details: TypeCardGraph[];
};

const StyledPerformanceCard = styled.div`
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  padding: 50px 20px 20px 20px;
  width: 100%;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;

    img {
      width: 79px;
      height: 47px;
    }

    h3 {
      margin: 20px auto;
      color: ${palette.dark};
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }

    p {
      max-width: 373px;
      color: ${palette.primary};
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
  }

  &:first-child {
    .header {
      position: relative;
      margin-bottom: 82px;

      &::after {
        content: "";
        position: absolute;
        background-color: ${palette.border};
        width: 200px;
        height: 2px;
        top: calc(40px + 100%);
        left: calc(50% - 100px);
      }
    }
  }

  .card-holder {
    display: flex;
    gap: 70px;
  }
`;

export default function PerformanceCard({
  title,
  description,
  details,
}: TypePerformanceCard) {
  return (
    <StyledPerformanceCard>
      <div className="header">
        <img src={performanceImage} alt="performance card illustration" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-holder">
        {details.length > 0 &&
          details.map((detail) => (
            <PerformanceCardGraph
              key={detail.id}
              title={detail.title}
              description={detail.description}
              value={detail.value}
              status={detail.status}
              percentage={detail.percentage}
              graph={detail.graph}
              performing={detail.performing}
            />
          ))}
      </div>
    </StyledPerformanceCard>
  );
}
