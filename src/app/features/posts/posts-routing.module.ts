import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: ':id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
