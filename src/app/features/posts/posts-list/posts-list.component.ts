import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostListItemModel } from '../models/post-list-item.model';
import { Observable } from 'rxjs';
import { take, share, filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {

  // postsList$: Observable<PostListItemModel[]>;
  postsList: PostListItemModel[];
  totalRecords: number;
  page = 1;

  constructor(
    private readonly postService: PostsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.postsList$ = this.postService.getPosts(30).pipe(take(1), share());
    this.postService.getPosts(30).pipe(take(1))
      .subscribe(data => {
        this.postsList = data;
        this.totalRecords = data.length;
      });
  }

  trackById(index: number, post: PostListItemModel): number {
    return post.ID;
  }

  postItem(event: PostListItemModel): void {
    this.router.navigate([event.ID], { relativeTo: this.activatedRoute });
  }

}
