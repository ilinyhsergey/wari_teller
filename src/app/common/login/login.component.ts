import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {LoginCredentials} from '../../api/generated/model/LoginCredentials';
import {ActorSession} from '../../model/ActorSession';
import {UserApi} from '../../api/generated/api/UserApi';
import {RedirectService} from '../../services/redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials;
  showSpecialPassword = false;

  constructor(private authService: AuthService,
              private userApi: UserApi,
              private router: Router,
              private redirectService: RedirectService) {
  }

  ngOnInit() {
    this.loginCredentials = {
      login: 'ZizaShopG', // todo
      password: 'Abdoulaziz',
      specialPassword: 'Abdoulaziz'
    };
  }

  login1() {
    this.showSpecialPassword = true;
  }

  login2() {
    this.userApi.userLoginPost1(this.loginCredentials)
      .subscribe((actorSession: ActorSession) => {

        this.authService.handleLogin(actorSession);
        const redirectUrl = this.redirectService.getAndClearRedirectUrl() || '/transactions/water';
        this.router.navigate([redirectUrl]);

      }, (err) => {
        console.log('err', err);
      });
  }

}
