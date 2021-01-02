import { Injectable } from '@angular/core';
import { Page } from './page';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CmspageService {
  ServerUrl = environment.baseUrl;
  errorData: {};
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getPage(slug: string) {
    return this.http
      .get<Page>(this.ServerUrl + 'api/page/' + slug)
      .pipe(catchError(this._handleError));
  }

  contactForm(formdata: Contact) {
    return this.http
      .post(`${this.ServerUrl}api/contact`, formdata, this.httpOptions)
      .pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.',
    };
    return throwError(this.errorData);
  }
}
