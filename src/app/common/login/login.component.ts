import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LoginCredentials} from '../../models/login-credentials';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.clear();
  }

  login() {
    this.authService.login(this.loginCredentials).subscribe((response: boolean) => {
      this.router.navigate(['/transactions/cash']);
    }, (error) => {
      console.log('Error', error);
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
