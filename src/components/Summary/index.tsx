import React, { Fragment } from "react";
import SummaryCard from "./SummaryCard";

const summaryData = [
  {
    id: "1",
    icon: "_mock_/summary/company.png",
    name: "Client Size",
    description:
      "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
    progresses: [
      {
        id: "1",
        label: "Small business (Less than $1M)",
        value: {
          percentage: "0%",
          value: "0",
        },
      },
      {
        id: "2",
        label: "Medium business ($1M-$10M)",
        value: {
          percentage: "10%",
          value: "284",
        },
      },
      {
        id: "3",
        label: "Large business ($10M-$1B)",
        value: {
          percentage: "60%",
          value: "1,256",
        },
      },
      {
        id: "4",
        label: "Enterprise (+$1B)",
        value: {
          percentage: "20%",
          value: "562",
        },
      },
    ],
    status: {
      mark: "Nice!",
      description: "Ogilvy is managing businesses of a similar size to yours.",
    },
  },
  {
    id: "2",
    icon: "_mock_/summary/location_search.png",
    name: "Industry focus",
    description:
      "See which industries this agency has the most experience and expertise in.",
    progresses: [
      {
        id: "1",
        label: "Healthcare",
        value: {
          percentage: "50%",
          value: "284",
        },
      },
      {
        id: "2",
        label: "Business Services",
        value: {
          percentage: "30%",
          value: "284",
        },
      },
      {
        id: "3",
        label: "Automotive",
        value: {
          percentage: "10%",
          value: "1,256",
        },
      },
      {
        id: "4",
        label: "Financial Services",
        value: {
          percentage: "10%",
          value: "562",
        },
      },
    ],
    status: {
      mark: "Things are looking good!",
      description:
        "Ogilvy has experience working with the same type of business as yours.",
    },
  },
  {
    id: "3",
    icon: "_mock_/summary/map_outlined.png",
    name: "Client Locations",
    description:
      "Check out where Ogilvy's clients are based thorough the world.",
    progresses: [
      {
        id: "1",
        label: "USA",
        value: {
          percentage: "50%",
        },
      },
      {
        id: "2",
        label: "Canada",
        value: {
          percentage: "20%",
        },
      },
      {
        id: "3",
        label: "Australia",
        value: {
          percentage: "10%",
        },
      },
      {
        id: "4",
        label: "Great Britain",
        value: {
          percentage: "5%",
        },
      },
      {
        id: "5",
        label: "Other",
        value: {
          percentage: "10%",
        },
      },
    ],
    status: {
      mark: "Well would you look at that!",
      description:
        "Ogilvy works with clients and client audiences in the same location as yours.",
    },
  },
  {
    id: "4",
    icon: "_mock_/summary/globe.png",
    name: "Networks",
    description:
      "View all of the social networks this agency currently manages, as well as which networks they work with the most.",
    progresses: [
      {
        id: "1",
        label: "Facebook",
        value: {
          percentage: "50%",
        },
      },
      {
        id: "2",
        label: "Twitter",
        value: {
          percentage: "20%",
        },
      },
      {
        id: "3",
        label: "Instagram",
        value: {
          percentage: "10%",
        },
      },
      {
        id: "4",
        label: "LinkedIn",
        value: {
          percentage: "5%",
        },
      },
      {
        id: "5",
        label: "YouTube",
        value: {
          percentage: "10%",
        },
      },
    ],
    status: {
      mark: "Awesome!",
      description: "Ogilvy is managing networks that fit your needs.",
    },
  },
  {
    id: "5",
    icon: "_mock_/summary/comment_text_outlined.png",
    name: "Language",
    description:
      "Check out where Ogilvy's clients are based thorough the world.",
    progresses: [
      {
        id: "1",
        label: "English",
        value: {
          percentage: "80%",
        },
      },
      {
        id: "2",
        label: "Spanish",
        value: {
          percentage: "20%",
        },
      },
    ],
    status: {
      mark: "Well would you look at that!",
      description:
        "Ogilvy works with clients and client audiences in the same location as yours.",
    },
  },
  {
    id: "6",
    icon: "_mock_/summary/brush.png",
    name: "Services Offered",
    description:
      "View all of the social networks this agency currently manages, as well as which networks they work with the most.",
    progresses: [
      {
        id: "1",
        label: "Social Media Management",
        value: {
          percentage: "50%",
        },
      },
      {
        id: "2",
        label: "Email Marketing",
        value: {
          percentage: "20%",
        },
      },
      {
        id: "3",
        label: "Graphic Design",
        value: {
          percentage: "10%",
        },
      },
      {
        id: "4",
        label: "Visual Identity",
        value: {
          percentage: "5%",
        },
      },
      {
        id: "5",
        label: "Leads Generation",
        value: {
          percentage: "10%",
        },
      },
    ],
    status: {
      mark: "Awesome!",
      description: "Ogilvy is managing networks that fit your needs.",
    },
  },
  {
    id: "7",
    icon: "_mock_/summary/dollar_outlined.png",
    name: "Budgets and pricing",
    description:
      "Here's what budgets Ogilvy works with, as well as some additional pricing info you might like to know.",
    progresses: [
      {
        id: "1",
        label: "Up to $500/mo",
        value: {
          percentage: "50%",
        },
      },
      {
        id: "2",
        label: "$500 - $1k/mo",
        value: {
          percentage: "12%",
        },
      },
      {
        id: "3",
        label: "$1k - $10k /mo",
        value: {
          percentage: "28%",
        },
      },
      {
        id: "4",
        label: "$10k - $100k / mo",
        value: {
          percentage: "44%",
        },
      },
      {
        id: "5",
        label: "$100k+ / mo",
        value: {
          percentage: "32%",
        },
      },
    ],
    status: {
      mark: "Awesome!",
      description: "Ogilvy is managing networks that fit your needs.",
    },
  },
];

export default function Summary() {
  return (
    <section>
      <div className="cardHolder">
        {summaryData.map((card) => (
          <Fragment key={card.id}>
            {/* @ts-ignore */}
            <SummaryCard
              name={card.name}
              description={card.description}
              icon={card.icon}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
