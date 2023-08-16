import styled from "styled-components";
import { palette } from "../../styled-constants";
import useDynamicImage from "../../hooks/useDynamicImage";
import LazyLoadedImage from "../common/LazyLoadedImage";

interface TSummaryCard {
  icon: string;
  name: string;
  description: string;
}

const StyledSummaryCard = styled.div`
  max-width: 580px;
  padding: 30px;
  padding-bottom: 32px;
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  display: flex;
  flex-direction: column;

  .image-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

export default function SummaryCard({ icon, name, description }: TSummaryCard) {
  const imageSrc = useDynamicImage(icon);

  return (
    <StyledSummaryCard>
      <div className="image-wrapper">
        <LazyLoadedImage alt={name + " icon"} imageSrc={imageSrc} />
      </div>
      <span>{name}</span>
      <span>{description}</span>
    </StyledSummaryCard>
  );
}