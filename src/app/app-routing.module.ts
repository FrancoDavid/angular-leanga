import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './components/list-post/list-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    component: ListPostComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
      path: '',
      redirectTo: 'posts',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
