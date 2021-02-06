import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  public listPosts$: Observable<Array<Post>> = this._postService.getPost();

  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit(): void {}

  detail(id_post: number): void {
    this._router.navigate(['/posts/'+id_post]);
  }

}
