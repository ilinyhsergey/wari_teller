import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {LoginCredentials} from '../../api/generated/model/LoginCredentials';
import {ActorSession} from '../../model/ActorSession';
import {UserApi} from '../../api/generated/api/UserApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials;

  constructor(private authService: AuthService,
              private userApi: UserApi,
              private router: Router) {
  }

  ngOnInit() {
    this.loginCredentials = {
      login: 'ZizaShopG', // todo
      password: 'Abdoulaziz',
      specialPassword: 'Abdoulaziz'
    };
  }

  login() {
    this.userApi.userLoginPost1(this.loginCredentials)
      .subscribe((actorSession: ActorSession) => {

        this.authService.handleLogin(actorSession);
        this.router.navigate(['/internal/transactions/water']);

      }, (err) => {
        console.log('err', err);
      });
  }

  clear() {
    this.loginCredentials = {
      login: '',
      password: '',
      specialPassword: ''
    };
  }

}
