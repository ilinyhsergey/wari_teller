import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {ActivatedRoute} from '@angular/router';

import {CanComponentDeactivate} from '../../../../model/CanComponentDeactivate';
import {Collection} from '../../../../app.declaration';
import {BillResponse} from '../../../../api/generated/model/BillResponse';
import {AuthService} from '../../../../services/auth.service';
import {TransactionApi} from '../../../../api/generated/api/TransactionApi';
import {BillRequestBody} from '../../../../api/generated/model/BillRequestBody';
import {BillRequest} from '../../../../api/generated/model/BillRequest';
import {ParameterApi} from '../../../../api/generated/api/ParameterApi';
import {MerchantForm} from '../../../../api/generated/model/MerchantForm';
import {B2BPartnerInformation} from '../../../../api/generated/model/B2BPartnerInformation';

@Component({
  selector: 'app-bill-water',
  templateUrl: './bill-water.component.html',
  styleUrls: ['./bill-water.component.scss']
})
export class BillWaterComponent implements OnInit, CanComponentDeactivate {

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
              private transactionApi: TransactionApi,
              private parameterApi: ParameterApi) {
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
    this.partnerName = partnerName = '1221000747900'; // 1221000748507

    this.parameterApi.findMerchantFormByReferenceGet1(partnerName)
      .subscribe((merchantForm: MerchantForm) => {
        console.log('merchantForm', merchantForm); // todo
      });

    this.parameterApi.findMerchantInformationsByReferenceGet1(partnerName)
      .subscribe((b2BPartnerInformations: B2BPartnerInformation[]) => {
        console.log('findMerchantInformationsByReference', b2BPartnerInformations); // todo
      });

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true; // todo check unsaved changes
  }

  send() {
    const billRequestBody: BillRequestBody = this.createRequestBody();

    this.transactionApi.findCustomerBillPost1(billRequestBody)
      .subscribe((billResponses: BillResponse[]) => {
        console.log('billResponses', billResponses); // todo
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
