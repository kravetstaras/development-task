import React from "react";

import Author from "./Author";
import { IAuthor } from "../../../interfaces";

type TypePublication = {
  message: string;
  author: IAuthor;
  publishedAt: Date;
};

const Publication: React.FC<TypePublication> = ({
  message,
  author,
  publishedAt,
}) => (
  <>
    <p className="message">{message}</p>
    <div className="card-footer">
      <Author author={author} />
      <p className="timestamp">{publishedAt.getDay()}</p>
    </div>
  </>
);

export default Publication;
