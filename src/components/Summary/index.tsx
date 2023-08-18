import React, { Fragment } from "react";
import SummaryCard from "./SummaryCard";
import styled from "styled-components";

import Form from "./SummaryForm";
import { mockedCards, mockedPartners } from "./mockedData";
import { breakpoints, palette } from "../../styled-constants";

import PartnerCard from "./SummaryPartnerCard";

import flare from "../../assets/flare.svg";

const StyledSummary = styled.section`
  margin: 0 40px;
  padding: 7px 50px 0 40px;

  .card-holder {
    column-count: 1;
    column-gap: 30px;

    @media screen and (min-width: ${breakpoints.md}) {
      column-count: 2;
    }
  }

  .contact-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${palette.pure};
    border-radius: 2px;
    margin: 30px auto;
    padding: 60px;

    h2 {
      color: ${palette.success};
      font-size: 24px;
      font-weight: 600;
      margin-top: 30px;
    }

    .text-block {
      margin: 20px auto 30px;

      p {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
      }

      .main-text {
        color: ${palette.dark};
      }

      .secondary-text {
        color: ${palette.primary};
      }
    }

    form {
      max-width: 600px;
      width: 100%;

      #contactForm {
        display: block;
        margin: 0 auto;
        width: 100%;
        min-height: 200px;
        flex-shrink: 0;
        border-radius: 3px;
        border: 1px solid ${palette.grey};
        background: ${palette.pure};
        padding: 20px;
        resize: none;
        font-weight: 400;
        font-size: 16px;
        outline: 0px none transparent;
        -moz-appearance: none;

        *:focus {
          outline: 0;
        }

        &::placeholder {
          color: ${palette.grey};
        }
      }

      button {
        margin-left: auto;
        margin-top: 20px;
      }
    }
  }

  .partners {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 350px));
    justify-content: center;
  }
`;

export default function Summary() {
  return (
    <StyledSummary>
      <div className="card-holder">
        {mockedCards?.map((card, index) => (
          <Fragment key={card.id + index}>
            <SummaryCard
              name={card.name}
              description={card.description}
              icon={card.icon}
              progresses={card.progresses}
              select={card.select}
              status={card.status}
            />
          </Fragment>
        ))}
      </div>
      <div className="contact-us">
        <img src={flare} alt="flare icon" />
        <h2>Great Match!</h2>
        <div className="text-block">
          <p className="main-text">
            Ogilvy is a great match for your business!
          </p>
          <p className="secondary-text">
            Get in touch and feel free to ask any questions you might have.
          </p>
        </div>
        <Form name="contactForm" onSubmit={(message) => console.log(message)} />
      </div>
      <div className="partners">
        {mockedPartners.length > 0 &&
          mockedPartners.map((partner) => (
            <PartnerCard
              key={partner.name}
              logo={partner.logo}
              href={partner.href}
              name={partner.name}
              description={partner.description}
            />
          ))}
      </div>
    </StyledSummary>
  );
}
