import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment'; 
import { retry, catchError, map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _API: string;

  constructor(private _http: HttpClient) {
    this._API = environment.API;
  }

  getPost(): Observable<Array<Post>> {
    return this._http.get<Array<Post>>(this._API + '/posts')
      .pipe(
        map((posts: Array<Post>) => posts.slice(0, 10)),
        retry(1),
        catchError(this.handleError)
      )
  }

  getDetailPost(id_post: number): Observable<Post> {
    return this._http.get<Post>(this._API + '/posts/'+ id_post)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getCommentsPost(id_post: number): Observable<Array<Comment>> {
    return this._http.get<Array<Comment>>(this._API + '/posts/' + id_post + '/comments')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage)
    return throwError(errorMessage);
  }

}
