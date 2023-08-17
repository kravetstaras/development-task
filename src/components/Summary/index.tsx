import React, { Fragment } from "react";
import SummaryCard from "./SummaryCard";
import styled from "styled-components";

import Form from "../common/Form";
import summaryData from "./mockedData.json";
import { palette } from "../../styled-constants";

import PartnerCard from "./PartnerCard";

import flare from "../../assets/flare.svg";

const StyledSummary = styled.section`
  margin: 0 40px;
  padding: 7px 50px 0 40px;

  .card-holder {
    column-count: 2;
    column-gap: 30px;
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
        border: none;
        border-radius: 2px;
        background-color: ${palette.progressDanger};
        color: ${palette.pure};
        font-weight: 600;
        padding: 11px 25px;
        float: right;
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
  // move to mock
  const partners = [
    {
      name: "Operam",
      description: "Augmenting teams through tech and automation.",
      href: "href.com",
      logo: "234.src",
    },
    {
      name: "LYFE Marketing",
      description:
        "A leading social media management company that helps businesses grow online. ",
      href: "href.com",
      logo: "234.src",
    },
    {
      name: "BBDO",
      description:
        "BBDO is a worldwide advertising agency network, with its headquarters in New York City.",
      href: "href.com",
      logo: "234.src",
    },
  ];
  return (
    <StyledSummary>
      <section className="card-holder">
        {summaryData?.data.map((card) => (
          <Fragment key={card.id}>
            {/* @ts-ignore */}
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
      </section>
      <section className="contact-us">
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
        <Form
          submitTitle="Contact Ogilvy"
          name="contactForm"
          onSubmit={(message) => console.log(message)}
        />
      </section>
      <section className="partners">
        {partners.length > 0 &&
          partners.map((partner) => (
            <PartnerCard
              logo={partner.logo}
              href={partner.href}
              name={partner.name}
              description={partner.description}
            />
          ))}
      </section>
    </StyledSummary>
  );
}
