import React from "react";
import { styled } from "styled-components";

import Author from "./Author";

import { IAuthor } from "../../../interfaces";
import { palette } from "../../../styled-constants";

type TypePublication = {
  message: string;
  author: IAuthor;
  publishedAt: string;
};

const StyledPublication = styled.div`
  .message {
    font-size: 16px;
    color: ${palette.dark};
    padding: 30px 0;
    border-top: 1px solid ${palette.primary};
    line-height: 22px;

    &:first-child {
      border-top: none;
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
  }

  .timestamp {
    font-size: 14px;
    color: ${palette.primary};
  }
`;

export default function Publication({
  message,
  author,
  publishedAt,
}: TypePublication) {
  return (
    <StyledPublication>
      <p className="message">{message}</p>
      <div className="card-footer">
        <Author author={author} />
        <p className="timestamp">{publishedAt}</p>
      </div>
    </StyledPublication>
  );
}
