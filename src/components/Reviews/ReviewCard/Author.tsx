import React from "react";
import { IAuthor } from "../../../interfaces";

type TypeAuthor = {
  author: IAuthor;
};

const Author: React.FC<TypeAuthor> = ({ author }) => (
  <div className="author-section">
    <img src={author.avatar} alt={author.name} />
    <div className="author-info">
      <p>{author.name}</p>
      {author?.position && <p className="position">{author.position}</p>}
    </div>
  </div>
);

export default Author;
