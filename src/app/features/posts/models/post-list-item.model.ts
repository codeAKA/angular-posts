import { PostAuthorModel } from './post-author.model';

export interface PostListItemModel {
  ID: number;
  site_ID: number;
  author: PostAuthorModel;
  date: Date;
  modified: Date;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  featured_image: string;
}
