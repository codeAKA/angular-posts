import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list/posts-list-item/posts-list-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    PostsListComponent,
    PostsListItemComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    // material
    MatDividerModule
  ],
  exports: [
    PostsListComponent,
    PostsListItemComponent
  ]
})
export class PostsModule { }
