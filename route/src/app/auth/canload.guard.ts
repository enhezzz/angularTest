import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginServiceService} from "../login-service.service";

@Injectable()
export class CanloadGuard implements CanLoad {
  constructor(private loginService: LoginServiceService,private router: Router){}
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.loginService.getLoginState())
    this.router.navigate(['login','b']);
    return Observable.of(this.loginService.getLoginState());
  }

}
