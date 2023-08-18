import React from "react";
import { styled } from "styled-components";

import Photo from "../../common/Photo";

import { IAuthor } from "../../../interfaces";
import { palette } from "../../../styled-constants";

type TypeAuthor = {
  author: IAuthor;
};

const StyledAuthor = styled.div`
  display: flex;
  gap: 15px;

  .author-info {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${palette.dark};

      &.position {
        color: ${palette.primary};
        font-size: 12px;
      }
    }
  }
`;

export default function Author({ author }: TypeAuthor) {
  return (
    <StyledAuthor>
      <Photo src={author.avatar} alt={author.name} />
      <div className="author-info">
        <p>{author.name}</p>
        {author?.position && <p className="position">{author.position}</p>}
      </div>
    </StyledAuthor>
  );
}
