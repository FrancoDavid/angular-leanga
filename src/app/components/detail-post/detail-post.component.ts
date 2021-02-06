import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit, OnDestroy {

  public post: Post;

  private _destroyed$: Subject<any>;

  public loading: boolean;

  constructor(private _activeRoute: ActivatedRoute, private _postService: PostService) {
    this.post =  null;
    this._destroyed$ = new Subject();
    this.loading = true;
  }

  ngOnInit(): void {
    this._postService.getDetailPost(this._activeRoute.snapshot.params.id)
      .pipe(
        takeUntil(this._destroyed$)
      ).subscribe((post: Post) => {
        this.loading = false;
        this.post = post;
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}