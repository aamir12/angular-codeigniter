import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.createUrlTree(['/login'], {
      queryParams: { returnUrl: url },
    });
  }
}
