import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import {ParameterApi} from '../../../api/generated/api/ParameterApi';
import {NetworkInformation} from '../../../api/generated/model/NetworkInformation';
import {Actor} from '../../../api/generated/model/Actor';
import {TestApi} from '../../../api/generated/api/TestApi';

@Component({
  selector: 'app-internal',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  currentUserName: string;

  constructor(private authService: AuthService,
              private router: Router,
              private parameterApi: ParameterApi,
              private testApi: TestApi) {
  }

  ngOnInit() {
    const user: Actor = this.authService.getCurrentUser();
    this.currentUserName = (user.firstName + ' ' + user.lastName);
  }

  test() {
    const observable = this.parameterApi.getInformationsSessionIDGet1(this.authService.getSessionId());
    observable.subscribe((networkInformations: NetworkInformation[]) => {
      console.log('networkInformations', networkInformations);
    }, (error) => {
      console.log('TransactionsComponent error', error);
    });
  }

  test2() {
    const observable = this.testApi.getToken1();
    observable.subscribe((token: any) => {
      console.log('getToken', token);
    }, (error) => {
      console.log('TransactionsComponent error 2', error);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
