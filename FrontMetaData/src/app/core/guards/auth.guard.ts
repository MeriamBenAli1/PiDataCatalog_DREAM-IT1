import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
    constructor(private authService: AuthService, private router: Router) {}


    canActivate(): boolean {
        this.authService.loadToken();
        if (this.authService.getToken()==null ||
        this.authService.isTokenExpired()) {
          
        
            this.router.navigate(['/account/login']);       
               return true;
        } else {
          // User doesn't have a valid token, redirect to login
          this.router.navigate(['/']);
          return false;
        }
      }
}
