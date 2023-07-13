import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: string =''
  password=''
  aunthenticateUser ='admin'
  aunthenticatePassword ='admin'
  constructor(
     private _loginService: LoginService,
    private router: Router
    ){
     this.user = JSON.parse(localStorage.getItem('user') || '')
     this.password = JSON.parse(localStorage.getItem('password') || '')
      
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if(this.aunthenticateUser === this.user && this.aunthenticatePassword  === this.password){
      return true;
    }
    else{
      return false;
    }

    }
  }

  

