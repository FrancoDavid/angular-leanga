import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public date: string;

  constructor(private _activeRoute: ActivatedRoute, private _postService: PostService, private _router: Router) {
    this.post =  null;
    this._destroyed$ = new Subject();
    this.loading = true;
    this.date = '';
  }

  ngOnInit(): void {
    const id: number = this._activeRoute.snapshot.params.id;
    if (!isNaN(id))  {
      this._postService.getDetailPost(id)
      .pipe(
        takeUntil(this._destroyed$)
      ).subscribe((post: Post) => {
        this.loading = false;
        this.post = post;
      });
    } else {
      this._router.navigate(['404']);
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  lastComments($event: string): void {
    this.date = $event;
  }

}
