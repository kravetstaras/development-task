import styled from "styled-components";
import { palette } from "../../styled-constants";
import useDynamicImage from "../../hooks/useDynamicImage";
import LazyLoadedImage from "../common/LazyLoadedImage";
import React from "react";
import SummaryProgressItem from "./SummaryProgressItem";
import MarkBlock from "../common/MarkBlock";
import Select from "../common/Select";

type TypeProgress = {
  id: string;
  label: string;
  value: {
    percentage: number;
    value?: string;
  };
};

type TypeSummaryCard = {
  icon: string;
  name: string;
  description: string;
  progresses: TypeProgress[];
  select?: {
    label: string;
    options: string[] | number[];
  };
  status: {
    mark: string;
    description: string;
  };
};

const StyledSummaryCard = styled.div`
  padding: 30px;
  padding-bottom: 32px;
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  display: inline-block;
  width: 100%;
  margin-bottom: 30px;

  .image-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background-color: ${palette.primaryBg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      color: ${palette.dark};
      font-size: 24px;
      font-weight: 600;
      line-height: 100%;
    }
  }

  p {
    color: ${palette.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export default function SummaryCard({
  icon,
  name,
  description,
  progresses,
  select,
  status,
}: TypeSummaryCard) {
  const imageSrc = useDynamicImage(icon);

  return (
    <StyledSummaryCard>
      <div className="image-wrapper">
        <LazyLoadedImage alt={name + " icon"} imageSrc={imageSrc} />
      </div>
      <div className="card-header">
        <h3>{name}</h3>
        {select?.options?.length > 0 && (
          <Select options={select.options} label={select.label} />
        )}
      </div>
      <p>{description}</p>
      {progresses.length > 0 && (
        <ul>
          {progresses.map((progress) => (
            <SummaryProgressItem
              key={progress.id}
              percent={progress.value.percentage}
              value={progress.value.value}
              label={progress.label}
            />
          ))}
        </ul>
      )}
      <MarkBlock mark={status.mark} description={status.description} />
    </StyledSummaryCard>
  );
}
