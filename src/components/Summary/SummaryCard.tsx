import styled from "styled-components";
import { palette } from "../../../styled-constants";
import useDynamicImage from "../../hooks/useDinamicImage";
import LazyLoadedImage from "../Common/LazyLoadedImage";

type TProgresses = {
  id: string;
  label: string;
  value: {
    percentage: string;
    value: string;
  };
};

type TStatus = {
  mark: string;
  description: string;
};

type TSummaryCard = {
  id: string;
  icon: string;
  name: string;
  description: string;
  progresses: TProgresses[];
  status: TStatus;
};

const StyledSummaryCard = styled.div`
  max-width: 580px;
  padding: 30px;
  padding-bottom: 32px;
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  display: flex;
  flex-direction: column;
`;

export default function SummaryCard({
  icon,
  name,
  description, //   progresses, status,
}: TSummaryCard) {
  const imageSrc = useDynamicImage(icon);

  return (
    <StyledSummaryCard>
      <div>
        <LazyLoadedImage alt={name + " icon"} imageSrc={imageSrc} />
      </div>
      <span>{name}</span>
      <span>{description}</span>
    </StyledSummaryCard>
  );
}
