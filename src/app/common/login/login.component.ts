import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {LoginCredentials} from '../../api/model/LoginCredentials';

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
      this.router.navigate(['/transactions/water']);
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
