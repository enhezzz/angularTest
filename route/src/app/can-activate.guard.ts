import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginServiceService} from "./login-service.service";
import {SubComponent1Component} from "./subModule/sub-component1/sub-component1.component";

@Injectable()
export class CanActivateGuard implements CanActivate,CanDeactivate<SubComponent1Component> {
  canDeactivate(component: SubComponent1Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm('你确定离开这吗？！')
  }
  constructor(private loginService: LoginServiceService,private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.url.toString())
    console.log(state.url)
    console.log('present allowence:'+this.isLogin().toString());

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {

      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    if(!this.isLogin()){console.log('你需要登陆后才能查看');
      alert('请先登录，随便填写。。。')
        this.router.navigate(['login','b'],navigationExtras);
    }
    return Observable.of(this.isLogin());
  }
  isLogin():boolean{
    return this.loginService.getLoginState();
  }
}
