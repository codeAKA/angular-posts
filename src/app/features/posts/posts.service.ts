import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PostListItemModel } from './models/post-list-item.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommentModel } from './models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = environment.baseUrl + environment.site + environment.posts;

  constructor(private http: HttpClient) { }

  getPosts(numberOfPosts: number): Observable<PostListItemModel[]> {
    const postsUrl = `${this.postsUrl}?number=${numberOfPosts}&pretty=true`;
    return this.http.get<any>(postsUrl)
      .pipe(
        catchError(error => throwError(error.messege)),
        map(result => {
          return result.posts
            .map(item => {
              return {
                ...item
              } as PostListItemModel;
            });
        }));
  }

  getPostById(postId?: number): Observable<PostListItemModel> {
    const postsUrl = `${this.postsUrl}${postId}?pretty=true`;
    return this.http.get<any>(postsUrl)
      .pipe(
        catchError(error => throwError(error.messege)),
        map(result => {
          return result as PostListItemModel;
        }));
  }

  getPostComments(postId: number): Observable<CommentModel[]> {
    return this.http.get<any>(`${this.postsUrl}${postId}${environment.comments}?pretty=true`)
      .pipe(
        catchError(error => throwError(error.messege)),
        map(result => {
          return result.comments
            .map(item => {
              return {
                ...item
              } as CommentModel;
            });
        }));
  }
}
