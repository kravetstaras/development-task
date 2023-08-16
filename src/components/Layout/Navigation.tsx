import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { palette } from "../../styled-constants";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 30px;

  a {
    text-decoration: none;
    color: ${palette.primary};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 7px;
    transition:
      border-bottom 0.1s ease,
      color 0.1s ease;

    &:hover {
      border-bottom: 2px solid ${palette.primary};
    }
  }

  .active {
    color: ${palette.danger};
    border-bottom: 2px solid ${palette.danger};

    &:hover {
      border-bottom: 2px solid ${palette.danger};
    }
  }
`;

const navigation = [
  { id: "1", href: "/summary", label: "Summary" },
  { id: "2", href: "/performance", label: "Performance" },
  { id: "3", href: "/portfolio", label: "Portfolio" },
  { id: "4", href: "/reviews", label: "Reviews" },
  { id: "5", href: "/latest", label: "Latest" },
];

export default function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <StyledNavigation>
      {navigation.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className={pathname === item.href ? "active" : ""}
        >
          {item.label}
        </Link>
      ))}
    </StyledNavigation>
  );
}
