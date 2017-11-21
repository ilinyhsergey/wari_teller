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
import {AuthService} from '../../../../services/auth.service';
import {TransactionApi} from '../../../../api/generated/api/TransactionApi';
import {BillRequestBody} from '../../../../api/generated/model/BillRequestBody';
import {BillRequest} from '../../../../api/generated/model/BillRequest';

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

  billReference: string;

  amount1: string;
  amount2: string;
  phone: string;
  address: string;


  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private transactionApi: TransactionApi) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const partnerInfo: Collection<string[]> = data.partnerInfo;
      this.partnerInfo = partnerInfo;

      this.partnerCodes = _.keys(partnerInfo);
      console.log('____ this.partnerCodes', this.partnerCodes); // todo
    });

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
    const billRequestBody: BillRequestBody = this.createRequestBody();

    const observable: Observable<BillResponse[]> = this.transactionApi.findCustomerBillPost1(billRequestBody);
    observable.subscribe((billResponses: BillResponse[]) => {
      console.log('billResponses', billResponses); // todo
    }, (error) => {
      console.log('error', error); // todo
    });

  }

  private createRequestBody(): BillRequestBody {
    return {
      sessionID: this.authService.getSessionId(),
      billRequest: {
        merchantCode: this.partnerName,
        billReference: this.billReference,
        billCurrency: this.amount1,
        billModeReglement: BillRequest.BillModeReglementEnum.TOTAL
      }
    };
  }
}
