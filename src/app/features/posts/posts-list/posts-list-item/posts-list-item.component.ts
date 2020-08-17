import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PostListItemModel } from '../../models/post-list-item.model';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListItemComponent implements OnInit {

  @Input() postItem: PostListItemModel;
  @Output() emittedPostItem: EventEmitter<PostListItemModel> = new EventEmitter();

  truncatedContent: string;

  constructor() { }

  ngOnInit(): void {
    const firstTag = this.postItem.content.match(/<p>(.*?)<\/p>/g)[0];
    this.truncatedContent = firstTag.length < 300 ? firstTag : firstTag.slice(0, 300) + '...';
  }

  goToPost(): void {
    this.emittedPostItem.emit(this.postItem);
  }

}
