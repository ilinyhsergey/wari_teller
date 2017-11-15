import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


import {AuthService} from '../../../services/auth.service';
import {ParameterApi} from '../../../api/generated/api/ParameterApi';
import {NetworkInformation} from '../../../api/generated/model/NetworkInformation';
import {UtilsService} from '../../../services/utils.service';

@Component({
  selector: 'app-internal',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private parameterApi: ParameterApi,
              private utilsService: UtilsService) {
  }

  ngOnInit() {
  }

  test() {

    console.log('!!! test'); // todo

    const obArr: Observable<any>[] = [];
    obArr.push(this.parameterApi.getInformationsSessionIDGet1(this.authService.getSessionId()));

    obArr.push(this.parameterApi.findB2BPartnerInformationsGet1());
    // obArr.push(this.parameterApi.findMerchantFormByReferenceGet1(''));
    // obArr.push(this.parameterApi.findMerchantInformationsByReferenceGet1(''));
    obArr.push(this.parameterApi.getAllCountriesGet1());
    obArr.push(this.parameterApi.getAllIDtypesSessionIDGet1(this.authService.getSessionId()));
    // obArr.push(this.parameterApi.getAllMerchantInCountryByCategoryCountryCodeCategoryGet1(1, ''));
    // obArr.push(this.parameterApi.getAllMobileOperatorsInCountryMobileCountryCodeGet1(221, ''));
    obArr.push(this.parameterApi.getAllTransferMotifsGet1());
    obArr.push(this.parameterApi.getAvailableDestinationCountriesSessionIDGet1(this.authService.getSessionId()));
    // obArr.push(this.parameterApi.getCountryGet1(1));
    obArr.push(this.parameterApi.getInformationsSessionIDGet1(this.authService.getSessionId()));


    console.log('____ obArr', obArr); // todo

    // const ob = Observable.zip(obArr);
    const ob = this.utilsService.collectArrOfOb2ObOfArr(obArr);

    console.log('____ ob', ob); // todo

    const a = ob.subscribe((next) => {
      console.log('____ next', next); // todo
    }, (error) => {
      console.log('____ error', error); // todo
    }, () => {
      console.log('_____ complete!'); // todo
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
