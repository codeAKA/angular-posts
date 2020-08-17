import { PostAuthorModel } from './post-author.model';
export interface CommentModel {
  ID: number;
  post: {
    ID: number,
    title: string,
    type: string,
    link: string
  };
  author: PostAuthorModel;
  date: Date;
  URL: string;
  short_URL: string;
  content: string;
  raw_content: string;
  status: string;
  parent: boolean;
  type: string;
  like_count: number;
  i_like: boolean;
  meta: {
   links: {
     self: string;
     help: string;
     site: string;
     post: string;
     replies: string;
     likes: string;
   }
  };
  can_moderate: boolean;
}
