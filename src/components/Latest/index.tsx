import React from "react";
import { styled } from "styled-components";
import LatestNavigation from "./latest-navigation";
import { instagramEmbed } from "./embed";
import { palette } from "../../styled-constants";

const StyledLatest = styled.section`
  background-color: ${palette.pure};
  border: 2px;
  padding: 26px;
  margin: 0 40px;
`;
export default function Latest() {
  return (
    <StyledLatest>
      <LatestNavigation />
      <div dangerouslySetInnerHTML={{ __html: instagramEmbed }}></div>
    </StyledLatest>
  );
}
