import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import {ParameterApi} from '../../../api/generated/api/ParameterApi';
import {NetworkInformation} from '../../../api/generated/model/NetworkInformation';

@Component({
  selector: 'app-internal',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private parameterApi: ParameterApi) {
  }

  ngOnInit() {
  }

  test() {
    const observable = this.parameterApi.getInformationsSessionIDGet1(this.authService.getSessionId());
    observable.subscribe((networkInformation: NetworkInformation) => {
      console.log('networkInformation', networkInformation);
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
