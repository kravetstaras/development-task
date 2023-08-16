import styled from "styled-components";

import palette from "../../../palette";
import { LOGO_SIZE } from "../../../constants";

import OgilvyLogo from "../Common/OgilvyLogo";

const StyledHeader = styled.header`
  padding: 0 20px;
  background-color: ${palette.pure};
  height: 50px;

  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <OgilvyLogo size={LOGO_SIZE.S} />
        <div>1</div>
      </div>
    </StyledHeader>
  );
}
