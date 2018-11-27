import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService,
        private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // Ejemplo
        //   if (this.cookie.get('JSESSIONID')) {
        //     if (state.url === '/dashboard') {
        //       return true;
        //     }
        //     if (state.url !== '/dashboard') {
        //       this.router.navigate(['dashboard']);
        //     }
        //   } else {
        //     if (state.url === '/login') {
        //       return true;
        //     }
        //     this.router.navigate(['login']);
        //     return false;
        //   }

        return true;
    }
}
