import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    NotFoundComponent,
    DetailPostComponent,
    CommentsPostComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
