import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import * as _ from 'lodash';

import {CanComponentDeactivate} from '../../../../model/CanComponentDeactivate';
import {ActivatedRoute} from '@angular/router';
import {Collection} from '../../../../app.declaration';
import {BillResponse} from '../../../../api/generated/model/BillResponse';
import {TransactionRequestBody} from '../../../../api/generated/model/TransactionRequestBody';
import {AuthService} from '../../../../services/auth.service';
import {TransactionRequest} from '../../../../api/generated/model/TransactionRequest';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss']
})
export class WaterBillComponent implements OnInit, CanComponentDeactivate {

  partnerInfo: Collection<string[]>;

  partnerCodes: string[] = [];
  partnerCode: string;

  partnerNames: string[];
  partnerName: string;

  bill: BillResponse;
  transactionRequestBody: TransactionRequestBody;
  transactionRequest: TransactionRequest;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const partnerInfo: Collection<string[]> = data.partnerInfo;
      this.partnerInfo = partnerInfo;

      this.partnerCodes = _.keys(partnerInfo);
      console.log('____ this.partnerCodes', this.partnerCodes); // todo
    });


    this.bill = {
      billReference: '',
      billAmount: 0,
      billFees: 0,
      billTimbre: 0,
      billTaxeFixe: 0,
      billClient: '',
      billInfos: {
        // phone: '',
        // address: ''
      }
    };

  }

  onPartnerCodeSelected(partnerCode: string) {
    this.partnerCode = partnerCode;
    this.partnerNames = this.partnerInfo[partnerCode];
  }

  onPartnerNameSelected(partnerName: string) {
    this.partnerName = partnerName;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true; // todo check unsaved changes
  }

  send() {
    console.log('TODO: send transaction'); // todo
    this.transactionRequestBody = {
      sessionID: this.authService.getSessionId(),
      transactionRequest: {}, // todo not all types generated
      objectType: 'BillPaymentContext'
    };

  }
}
