import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  serverUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http
      .get<Blog>(`${this.serverUrl}api/adminBlogs`)
      .pipe(catchError(this.handleError));
  }

  getBlog(id: number) {
    return this.http
      .get<Blog>(this.serverUrl + 'api/adminBlog/' + id)
      .pipe(catchError(this.handleError));
  }

  createBlog(blog) {
    return this.http
      .post<any>(this.serverUrl + 'api/createBlog', blog)
      .pipe(catchError(this.handleError));
  }

  updateBlog(blog, id: number) {
    return this.http
      .post<any>(this.serverUrl + 'api/updateBlog/' + id, blog)
      .pipe(catchError(this.handleError));
  }

  deleteBlog(id: number) {
    return this.http
      .delete(this.serverUrl + 'api/deleteBlog/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happend. Please try again later.');
  }
}
