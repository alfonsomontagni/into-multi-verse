import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (!this.authService.isAuthenticated()) {
        // Redirect to login page if not authenticated
        this.router.navigate(['/login']);
        return false;
      }
      
      if (!this.authService.isAuthorized(next.data['roles'])) {
        // Redirect to no-auth page if not authorized
        this.router.navigate(['/no-auth']);
        return false;
      }
    return true;
  }
  
}
