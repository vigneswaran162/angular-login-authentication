import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from './users.service'

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor (private user:UsersService , private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.user.isadminlogin()){
      return true;
    }
    else{
      this.router.navigate(['admin'])
      return false;

    }
  }

}
