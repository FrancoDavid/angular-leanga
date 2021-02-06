import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    component: ListPostComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'posts/:id',
    component: DetailPostComponent
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
