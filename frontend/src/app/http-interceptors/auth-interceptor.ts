import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      const authToken = this.authService.getAuthorizationToken();
      const modifiedRequest = request.clone({
        headers: request.headers.append('Authorization', authToken),
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
    //manipulate request
  }
}
