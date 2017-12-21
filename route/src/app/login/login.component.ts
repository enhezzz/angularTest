import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../login-service.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,private router: Router) { }

  ngOnInit() {
  }
login(loginInfo:any){

    console.log('一秒后登录。。。')
    console.log(loginInfo);
    this.loginService.Logined();
    setTimeout( () => {
      this.router.navigate(['sub',1]);
    },1000)

}
}
