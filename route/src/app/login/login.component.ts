import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../login-service.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }
login(loginInfo:any){
    console.log('一秒后登录。。。')
    console.log(loginInfo);
    this.loginService.Logined()
}
}
