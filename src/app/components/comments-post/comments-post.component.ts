import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit, OnDestroy {

  public list_comments: Array<Comment>;

  public loading: boolean;

  private _destroyed$: Subject<any>;

  @Input() postID: number;

  @Output() dateEmitter: EventEmitter<string>;

  constructor(private _postService: PostService) {
    this.list_comments = [];
    this.loading = true;
    this._destroyed$ = new Subject();
    this.dateEmitter = new EventEmitter<string>();

  }

  ngOnInit(): void {
    this._postService.getCommentsPost(this.postID)
      .pipe(
        takeUntil(this._destroyed$)
      ).subscribe((comments: Array<Comment>) => {
        this.loading = false;
        this.list_comments = comments;
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  emitter(): void {
    const date = new Date().toString();
    this.dateEmitter.emit(date);
  }
}
