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

  getDetailPost(id_posts: number): Observable<Post> {
    return this._http.get<Post>(this._API + '/posts/'+ id_posts)
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
