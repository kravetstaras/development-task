import React from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

type TypeSelect = {
  options: string[] | number[];
  label: string;
  disabled?: boolean;
};

const StyledSelect = styled.select`
  border: none;
  color: ${palette.dark};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  outline: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 10px;
  padding: 1rem;
  padding-right: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default function Select({
  options,
  label,
  disabled = false,
}: TypeSelect) {
  return (
    <StyledSelect name="select">
      <option value={label} selected hidden>
        {label}
      </option>
      {options.length > 0 &&
        options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
    </StyledSelect>
  );
}
