export interface IAuthor {
  name: string;
  avatar: string;
  position?: string;
}

export interface IPublication {
  message: string;
  author: IAuthor;
  publishedAt: string;
}
