import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {LoginCredentials} from '../../api/generated/model/LoginCredentials';
import {ActorSession} from '../../model/ActorSession';
import {UserApi} from '../../api/generated/api/UserApi';
import {RedirectService} from '../../services/redirect.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials;
  showSpecialPassword = false;

  login1Form: FormGroup;
  login2Form: FormGroup;

  constructor(private authService: AuthService,
              private userApi: UserApi,
              private router: Router,
              private redirectService: RedirectService) {
  }

  ngOnInit() {
    this.loginCredentials = {login: 'ZizaShopG', password: 'Abdoulaziz', specialPassword: 'Abdoulaziz'};// todo
    // this.loginCredentials = {login: '', password: '', specialPassword: ''};

    this.login1Form = new FormGroup({
      'fLogin': new FormControl(this.loginCredentials.login, Validators.required),
      'fPassword': new FormControl(this.loginCredentials.password, Validators.required),
    });
    this.login2Form = new FormGroup({
      'fSpecialPassword': new FormControl(this.loginCredentials.specialPassword, Validators.required)
    });
  }

  get fLogin() {
    return this.login1Form.get('fLogin');
  }

  get fPassword() {
    return this.login1Form.get('fPassword');
  }

  get fSpecialPassword() {
    return this.login2Form.get('fSpecialPassword');
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
