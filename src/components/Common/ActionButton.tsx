import styled from "styled-components";

import { BUTTON_HEIGHT } from "../../../constants";
import palette from "../../../palette";

type TActionButton = {
  height: "l" | "s";
  onClick: () => void;
};

export default function ActionButton({
  height = BUTTON_HEIGHT.S,
  onClick,
}: TActionButton) {
  return (
    <StyledActionButton onClick={onClick} height={height}>
      ActionButton
    </StyledActionButton>
  );
}

const StyledActionButton = styled.button<{ height: "l" | "s" }>`
  background-color: ${palette.secondary};
  color: ${palette.pure};
  height: 50px;
  border-radius: 2px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  display: flex;
  align-items: center;
`;
