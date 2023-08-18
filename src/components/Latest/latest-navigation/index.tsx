import React from "react";
import styled from "styled-components";

import LatestNavigationItem from "./LatestNavigationItem";

const socialNav = [
  { id: 1, image: "_mock_/latest/social-media/google.svg", slug: "google" },
  {
    id: 2,
    image: "_mock_/latest/social-media/facebook.svg",
    slug: "facebook",
  },
  {
    id: 3,
    image: "_mock_/latest/social-media/instagram.svg",
    slug: "instagram",
  },
  {
    id: 4,
    image: "_mock_/latest/social-media/linkedin.svg",
    slug: "linkedin",
  },
  { id: 5, image: "_mock_/latest/social-media/youtube.svg", slug: "youtube" },
  {
    id: 6,
    image: "_mock_/latest/social-media/twitter-x.svg",
    slug: "twitter-x",
  },
  { id: 7, image: "_mock_/latest/social-media/blog.svg", slug: "blog" },
];

const StyledNavigation = styled.nav`
  display: flex;
  width: max-content;
  gap: 32px;
  margin: 0 auto 63px;
`;

export default function LatestNavigation() {
  return (
    <StyledNavigation>
      {socialNav.length > 0 &&
        socialNav.map((navItem) => (
          <LatestNavigationItem
            key={navItem.id}
            imgPath={navItem.image}
            slug={navItem.slug}
          />
        ))}
    </StyledNavigation>
  );
}
