import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginServiceService} from "./login-service.service";

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private loginService: LoginServiceService,private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.url.toString())
    console.log(state.url)
    console.log('present allowence:'+this.isLogin().toString());
    if(!this.isLogin()){console.log('你需要登陆后才能查看');
        this.router.navigate(['/login']);
    }
    return this.isLogin();
  }
  isLogin():boolean{
    return this.loginService.getLoginState();
  }
}
