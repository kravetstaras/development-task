import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

const StyledDetailItem = styled.li`
  border-radius: 3px;
  background: ${palette.dangerBg};
  padding: 6px 10px 4px;
  color: ${palette.danger};
  font-size: 11px;
  font-weight: 600;
  width: fit-content;
  white-space: nowrap;
`;

export default function DetailItem({ label }: { label: string }) {
  return <StyledDetailItem>{label}</StyledDetailItem>;
}
