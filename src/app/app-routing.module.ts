import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './components/list-post/list-post.component';

const routes: Routes = [
  {
    path: 'posts',
    component: ListPostComponent
  },
  {
      path: '',
      redirectTo: 'posts',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
