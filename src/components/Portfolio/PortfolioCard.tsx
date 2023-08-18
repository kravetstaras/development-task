import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PortfolioCardBodyTitle from "./PortfolioCardBodyTitle";
import DetailItem from "../common/DetailItem";

import useDynamicImage from "../../hooks/useDynamicImage";
import { palette } from "../../styled-constants";

import StatusCheckGreen from "../../assets/status-check-green.svg";
import pathIcon from "../../assets/path.svg";

type TypePortfolioCard = {
  name: string;
  icon: string;
  status: string;
  city: string;
  country: string;
  website: string;
  industry: string;
  business_size: string;
  services: string[];
  description: string;
};

enum Status {
  Verified = "Verified",
}

const StyledPortfolioCard = styled.div`
  border-radius: 2px;
  background: ${palette.pure};
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  padding: 40px 30px;

  .header {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 40px;

    img {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }

    .company-data {
      display: flex;
      flex-direction: column;
      gap: 5px;

      p {
        display: flex;
        align-items: baseline;
        font-weight: 400;
        color: ${palette.primary};
        font-size: 14px;
        font-style: normal;

        img {
          width: 16px;
          height: 16px;
          margin-left: 5px;
        }

        a {
          margin-left: 5px;
          display: flex;
          text-decoration: none;
          color: ${palette.primary};

          img {
            margin-left: 5px;
          }
        }
      }

      .info {
        display: flex;
        gap: 5px;
        align-items: center;

        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .name {
          color: ${palette.dark};
          font-size: 20px;
          font-weight: 600;
        }

        .status {
          color: ${palette.primary};
          font-size: 14px;
        }
      }
    }
  }

  .card-body {
    .card-body-top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .column {
      display: grid;

      p {
        margin-top: 10px;
        font-weight: 600;
      }
    }
  }

  .card-body-bottom {
    margin-top: 30px;

    h5 {
      margin: 15px 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 3px;
    }
  }

  .card-footer {
    margin-top: 30px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 24px;
  }
`;

export default function PortfolioCard({
  name,
  icon,
  status,
  city,
  country,
  website,
  industry,
  business_size,
  services,
  description,
}: TypePortfolioCard) {
  const imageSrc = useDynamicImage(icon);
  return (
    <StyledPortfolioCard>
      <div className="header">
        <img src={imageSrc} alt={`${name} category icon`} />
        <div className="company-data">
          <div className="info">
            <span className="name">{name}</span>
            {status === Status.Verified && (
              <img src={StatusCheckGreen} alt={`${name} status mark`} />
            )}
            <span className="status">{status}</span>
          </div>
          <p>
            {`${city}, ${country}. `}
            <Link to={website}>
              {website}
              <img src={pathIcon} alt={"path icon"} />
            </Link>
          </p>
        </div>
      </div>

      <div className="card-body">
        <div className="card-body-top">
          <div className="column">
            <PortfolioCardBodyTitle label={"Industry"} />
            <p>{industry}</p>
          </div>
          <div className="column">
            <PortfolioCardBodyTitle label={"Business size"} />
            <p>{business_size}</p>
          </div>
        </div>
        <div className="card-body-bottom">
          <PortfolioCardBodyTitle label={"Services"} />
          <ul>
            {services.map((service) => (
              <DetailItem label={service} key={service} />
            ))}
          </ul>
        </div>
      </div>
      <div className="card-footer">
        <p>{description}</p>
      </div>
    </StyledPortfolioCard>
  );
}
