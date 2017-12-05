import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import {StorageService} from '../../../../services/storage.service';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {SendMoneyContext} from '../../../../api/generated/model/SendMoneyContext';
import {PieceType} from '../../../../api/generated/model/PieceType';
import {DateToNgbDateStructPipe} from '../../../app-components/date-to-ngb-date-struct.pipe';
import {NgbDateStructToDatePipe} from '../../../app-components/ngb-date-struct-to-date.pipe';
import {Customer} from '../../../../api/generated/model/Customer';
import {Motif} from '../../../../api/generated';
import PaymentMeanEnum = SendMoneyContext.PaymentMeanEnum;

@Component({
  selector: 'app-transfer-send-step1',
  templateUrl: './transfer-send-step1.component.html',
  styleUrls: ['./transfer-send-step1.component.scss']
})
export class TransferSendStep1Component implements OnInit {

  sendMoneyRequest: ProcessSendMoneyRequest;
  allCountries: GeoZone[];
  allPieceTypes: PieceType[];
  allTransferMotifs: Motif[];
  motifCode: string;
  paymentMeans: PaymentMeanEnum[];
  identityEmissionDate: NgbDateStruct;
  identityExpirationDate: NgbDateStruct;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService,
              private dateToNgbDateStructPipe: DateToNgbDateStructPipe,
              private ngbDateStructToDatePipe: NgbDateStructToDatePipe) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
      this.allPieceTypes = data.allPieceTypes || [];
      this.allTransferMotifs = data.allTransferMotifs || [];
    });

    this.initModel();
    this.initPaymentMean();
  }

  private initPaymentMean() {
    this.paymentMeans = [
      PaymentMeanEnum.ACCOUNT,
      PaymentMeanEnum.CASH,
      PaymentMeanEnum.WARIPASS
    ];
    this.sendMoneyRequest.paymentMean = null; // deselect if it is
  }

  isReceptionModeWaripass() {
    return this.sendMoneyRequest.paymentMean === PaymentMeanEnum.WARIPASS;
  }

  private initModel() {
    let model: ProcessSendMoneyRequest = this.storage.get('processSendMoneyRequest') as ProcessSendMoneyRequest;
    if (!model) {
      model = {
        sender: {},
        receiver: {}
      };
    }
    this.sendMoneyRequest = model;

    this.initIdentityDates(this.sendMoneyRequest);
  }

  private initIdentityDates(sendMoneyRequest: ProcessSendMoneyRequest): void {
    const sender: Customer = sendMoneyRequest.sender;
    this.identityEmissionDate = this.dateToNgbDateStructPipe.transform(sender.identityEmissionDate);
    this.identityExpirationDate = this.dateToNgbDateStructPipe.transform(sender.identityExpirationDate);
  }

  private assembleModel(sendMoneyRequest: ProcessSendMoneyRequest): ProcessSendMoneyRequest {
    const sender: Customer = sendMoneyRequest.sender;
    sender.identityEmissionDate = this.ngbDateStructToDatePipe.transform(this.identityEmissionDate);
    sender.identityExpirationDate = this.ngbDateStructToDatePipe.transform(this.identityExpirationDate);
    sendMoneyRequest.motif = _.find(this.allTransferMotifs, m => m.code === this.motifCode);
    sendMoneyRequest.securityTokenTransaction = this.isReceptionModeWaripass();
    return sendMoneyRequest;
  }

  goStep2() {
    const sendMoneyRequest = this.assembleModel(this.sendMoneyRequest);
    this.storage.set('processSendMoneyRequest', sendMoneyRequest);
    this.router.navigate(['/transactions/send/step2']);
  }

  onPaymentModeChange(mode: string) {
    const paymentMean: PaymentMeanEnum = PaymentMeanEnum[mode];
    this.sendMoneyRequest.paymentMean = paymentMean;

    switch (paymentMean) {
      case PaymentMeanEnum.CASH:
      case PaymentMeanEnum.ACCOUNT:
        this.goStep2();
        break;
      case PaymentMeanEnum.WARIPASS:
      default:
        break;
    }
  }

}
