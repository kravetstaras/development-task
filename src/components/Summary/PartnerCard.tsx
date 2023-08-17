import React from "react";
import { styled } from "styled-components";
import { palette } from "../../styled-constants";

import arrow from "../../assets/arrow-forward.svg";

type TypePartnerCard = {
  logo: string;
  name: string;
  description: string;
  href: string;
};

const StyledPartnerCard = styled.div`
  padding: 38px 20px;
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px ${palette.dark};

  .logo {
    height: 70px;
    width: 150px;
    margin: 0 auto;
  }

  .name {
    color: ${palette.dangerBg};
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
  }

  .description {
    color: ${palette.primary};
    font-size: 14px;
    text-align: center;
  }

  a {
    color: ${palette.progressDanger};
    margin: 0 auto;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const PartnerCard: React.FC<TypePartnerCard> = ({
  logo,
  name,
  description,
  href,
}) => {
  return (
    <StyledPartnerCard>
      <img className="logo" src={logo} alt={name + " logo"} />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <a href={href}>
        OPEN <img src={arrow} />
      </a>
    </StyledPartnerCard>
  );
};

export default PartnerCard;
