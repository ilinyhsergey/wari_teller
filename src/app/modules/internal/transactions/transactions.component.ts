import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import {ParameterApi} from '../../../api/generated/api/ParameterApi';
import {NetworkInformation} from '../../../api/generated/model/NetworkInformation';
import {Actor} from '../../../api/generated/model/Actor';

@Component({
  selector: 'app-internal',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  currentUserName: string;
  showSubmenuTransfer = false;
  showSubmenuBill = false;

  constructor(private authService: AuthService,
              private router: Router,
              private parameterApi: ParameterApi) {
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
