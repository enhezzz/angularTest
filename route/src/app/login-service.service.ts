import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginServiceService {
  private isLogin: boolean = false;
  constructor() { }
  Logined(){
    Observable.of(true).delay(1000).subscribe(val => {console.log('------'+val);return this.isLogin = val;});
  };


  getLoginState():boolean{return this.isLogin};

}
