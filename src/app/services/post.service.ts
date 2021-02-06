import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment'; 
import { retry, catchError  } from 'rxjs/operators';

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
