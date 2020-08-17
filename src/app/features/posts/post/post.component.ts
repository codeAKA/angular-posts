import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PostListItemModel } from '../models/post-list-item.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommentModel } from '../models/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  id: number;
  post: PostListItemModel;
  comments: CommentModel[];
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private readonly postService: PostsService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    if (this.id) {
      this.postService.getPostById(this.id).pipe(take(1))
        .subscribe(post => {
          this.post = post;
          this.postService.getPostComments(this.id).pipe(take(1))
            .subscribe(comments => {
              this.comments = comments;
              this.changeDetector.detectChanges();
            });
        }
        );
    }
  }

  trackById(index: number, post: PostListItemModel): number {
    return post.ID;
  }

}
