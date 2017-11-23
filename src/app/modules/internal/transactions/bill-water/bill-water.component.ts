import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {ActivatedRoute} from '@angular/router';

import {CanComponentDeactivate} from '../../../../model/CanComponentDeactivate';
import {Collection} from '../../../../app.declaration';
import {BillResponse} from '../../../../api/generated/model/BillResponse';
import {AuthService} from '../../../../services/auth.service';
import {TransactionApi} from '../../../../api/generated/api/TransactionApi';
import {ParameterApi} from '../../../../api/generated/api/ParameterApi';
import {TransactionResponse} from '../../../../api/generated/model/TransactionResponse';
import {TransactionRequestBody} from '../../../../api/generated/model/TransactionRequestBody';
import {FormSteps} from '../../../../model/FormSteps';
import {TransactionRequest} from '../../../../api/generated/model/TransactionRequest';
import {BillPaymentContext} from '../../../../api/generated/model/BillPaymentContext';
import {ProcessTransactionContext} from '../../../../api/generated/model/ProcessTransactionContext';
import {PaymentModeModel} from '../../../app-components/payment-mode/payment-mode.component';

@Component({
  selector: 'app-bill-water',
  templateUrl: './bill-water.component.html',
  styleUrls: ['./bill-water.component.scss']
})
export class BillWaterComponent implements OnInit, CanComponentDeactivate {

  steps: FormSteps;

  partnerInfo: Collection<string[]>;

  partnerCodes: string[] = [];
  partnerCode: string;

  partnerNames: string[];
  partnerName: string;

  billReference: string;

  amount1: number;
  amount2: number;
  billClient: string;
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
    });

    this.steps = '1-2';
  }

  onPartnerCodeSelected(partnerCode: string) {
    this.partnerCode = partnerCode;
    this.partnerNames = this.partnerInfo[partnerCode];
  }

  onPartnerNameSelected(partnerName: string) {
    this.partnerName = partnerName; // = '1221000747900'; // 1221000748507

    this.billReference = partnerName; // todo need verify
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true; // todo check unsaved changes
  }

  processTransaction(paymentModeModel: PaymentModeModel) {
    // todo validate fiels of 1-2 steps

    const transactionRequestBody: TransactionRequestBody = this.createTransactionRequestBody(paymentModeModel);

    console.log('/transaction/processTransaction <- transactionRequestBody', transactionRequestBody); // todo

    this.transactionApi.processTransactionPost1(transactionRequestBody).subscribe((res: TransactionResponse) => {
      console.log('/transaction/processTransaction -> TransactionResponse', res); // todo
    }, (error) => {
      console.log('/transaction/processTransaction -> error', error); // todo
    });

  }

  private createTransactionRequestBody(paymentModeModel: PaymentModeModel): TransactionRequestBody {
    const bill: BillResponse = {
      billReference: this.billReference,
      billAmount: this.amount1,
      billFees: 0, // todo
      billTimbre: 0, // todo
      billTaxeFixe: 0, // todo
      billClient: this.billClient,
      billInfos: {}
    };
    const context: BillPaymentContext = {
      bill: bill
    };
    this.fillProcessTransactionContext(context, paymentModeModel);

    const transactionRequest: TransactionRequest = {
      context: context as ProcessTransactionContext,
    };
    this.fillProcessTransactionContext(transactionRequest, paymentModeModel);

    return {
      sessionID: this.authService.getSessionId(),
      objectType: 'BillPaymentContext',
      transactionRequest: transactionRequest
    };
  }

  fillProcessTransactionContext<T extends ProcessTransactionContext>(context: T, paymentModeModel: PaymentModeModel): T {
    _.assign(context, {
      securityTokenTransaction: paymentModeModel.paymentMode === 'waripass',
      tokenValidationDesc: '', // todo
      wariPassOTP: '', // todo
      wariPassToken: paymentModeModel.wariPassToken,
    });
    return context;
  }
}
