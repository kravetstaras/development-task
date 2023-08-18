import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

type TypeContainer = {
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
    margin: 0 auto 250px;
  }
`;

export default function Container({ children }: TypeContainer) {
  return <StyledContainer>{children}</StyledContainer>;
}
