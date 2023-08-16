import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

type TContainer = {
  children: ReactNode;
};

const StyledContainer = styled.main`
  max-width: 100vw;
  min-width: 100%;
  min-height: 100%;
  margin: 0 auto;
  overflow: hidden;

  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default function Container({ children }: TContainer) {
  return <StyledContainer>{children}</StyledContainer>;
}
