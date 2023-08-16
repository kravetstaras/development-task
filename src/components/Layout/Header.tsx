import styled from "styled-components";

import { palette } from "../../../styled-constants";
import { LOGO_SIZE } from "../../../constants";

import OgilvyLogo from "../Common/OgilvyLogo";
import ActionButton from "../Common/ActionButton";
import Photo from "../Common/Photo";
import BackButton from "../Common/BackButton";

import logo from "../../assets/logo-icons/logo.svg";

const StyledHeader = styled.header`
  padding: 0 50px;
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

    .left {
      display: flex;
      gap: 25px;
      align-items: center;
    }

    .right {
      display: flex;
      gap: 20px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="left">
          {/* TODO: HERE HAVE TO BE HREF TO ANOTHER APP */}
          <a href="#">
            <img src={logo} alt="logo to another resource" />
          </a>
          <BackButton />
        </div>
        <OgilvyLogo size={LOGO_SIZE.S} />
        <div className="right">
          <ActionButton onClick={() => console.log("need to add feat")} />
          <Photo />
        </div>
      </div>
    </StyledHeader>
  );
}
